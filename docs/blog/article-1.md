---
layout: BlogPost
date: 2025.01.12 
archive: true
title: Detailed explanation of the use of the with keyword in Python
description: The with keyword in Python 2.5 was introduced, and it provides a convenient way to reuse the common try ... except ... finally ... pattern. Consider this classic example
---

In Python 2.5, the with keyword was introduced. It provides a convenient way to reuse the common try ... except ... finally ... pattern. Consider this classic example:
with open('file.txt') as f:
  content = f.read()
In this code, no matter what happens during the execution of the block inside with, the file will eventually be closed. If an exception occurs during the execution of the block, the program will close the opened file before the exception is raised.

Now, let's look at another example.

When initiating a database transaction request, code like this is often used:
 
db.begin()
 
try:
  # do some actions
except:
  db.rollback()
  raise
finally:
  db.commit()
If the operation to initiate a transaction request is made to support the with keyword, then code like this can be used:
 
with transaction(db):
  # do some actions
Next, let's explain the execution process of with in detail and implement the above code in two common ways.

General Execution Process of with

A basic with expression has the following structure:

with EXPR as VAR:
  BLOCK
Here, EXPR can be any expression, and as VAR is optional. The general execution process is as follows:

Evaluate EXPR to obtain a context manager.
The context manager's __exit__() method is saved for later use.
Call the context manager's __enter__() method.
If the with expression includes as VAR, the return value of EXPR is assigned to VAR.
Execute the expressions in BLOCK.
Call the context manager's __exit__() method. If an exception occurred during the execution of BLOCK causing the program to exit, the exception's type, value, and traceback (i.e., the return values of sys.exc_info()) are passed as arguments to __exit__(). Otherwise, three None values are passed.

Expressing this process in code, it looks like this:
mgr = (EXPR)
exit = type(mgr).__exit__ # Not executed here
value = type(mgr).__enter__(mgr)
exc = True
 
try:
  try:
    VAR = value # If there is 'as VAR'
    BLOCK
  except:
    exc = False
    if not exit(mgr, *sys.exc_info()):
      raise
finally:
  if exc:
    exit(mgr, None, None, None)
There are a few details in this process:

If the context manager lacks either the __enter__() or __exit__() method, the interpreter will raise an AttributeError.
After an exception occurs in BLOCK, if the __exit__() method returns a value that can be interpreted as True, the exception will not be raised, and subsequent code will continue to execute.

Next, let's implement the process described above using two methods.
Implementing a Context Manager Class:
The first method is to implement a class containing an instance attribute db and the required context manager methods __enter__() and __exit__().

class transaction(object):
  def __init__(self, db):
    self.db = db
 
  def __enter__(self):
    self.db.begin()
 
  def __exit__(self, type, value, traceback):
    if type is None:
      db.commit()
    else:
      db.rollback()
Understanding the execution process of with, this implementation is straightforward. The implementation method introduced next is more complex in principle.

Using a Generator Decorator
In Python's standard library, there is a decorator that can obtain a context manager from a generator. The implementation using the generator decorator is as follows:
 
@contextmanager
def transaction(db):
  db.begin()
 
  try:
    yield db
  except:
    db.rollback()
    raise
  else:
    db.commit()
At first glance, this implementation seems simpler, but its mechanism is more complex. Let's look at its execution process:

The Python interpreter recognizes the yield keyword, and def creates a generator function instead of a regular function (outside class definitions, I prefer using functions over methods).
The decorator contextmanager is called and returns a helper function. This helper function, when called, generates a GeneratorContextManager instance. Ultimately, the EXPR in the with expression calls the helper function returned by the contextmanager decorator.
The with expression calls transaction(db), which actually calls the helper function. The helper function calls the generator function, which creates a generator.
The helper function passes this generator to GeneratorContextManager and creates an instance object of GeneratorContextManager as the context manager.
The with expression calls the context manager's __enter__() method of the instance object.
The __enter__() method calls the generator's next() method. At this point, the generator method executes up to yield db and stops, returning db as the return value of next(). If there is as VAR, it will be assigned to VAR.
The BLOCK within with is executed.
After the BLOCK execution ends, the context manager's __exit__() method is called. The __exit__() method calls the generator's next() method again. If a StopIteration exception occurs, it is passed.
If no exception occurred, the generator method will execute db.commit(); otherwise, it will execute db.rollback().

Let's look at the approximate code implementation of the above process again:
 
def contextmanager(func):
  def helper(*args, **kwargs):
    return GeneratorContextManager(func(*args, **kwargs))
  return helper
 
class GeneratorContextManager(object):
  def __init__(self, gen):
    self.gen = gen
 
  def __enter__(self):
    try:
      return self.gen.next()
    except StopIteration:
      raise RuntimeError("generator didn't yield")
 
  def __exit__(self, type, value, traceback):
    if type is None:
      try:
        self.gen.next()
      except StopIteration:
        pass
      else:
        raise RuntimeError("generator didn't stop")
    else:
      try:
        self.gen.throw(type, value, traceback)
        raise RuntimeError("generator didn't stop after throw()")
      except StopIteration:
        return True
      except:
        if sys.exc_info()[1] is not value:
          raise
Summary
Python's with expression incorporates many Python features. Taking the time to thoroughly understand with is highly worthwhile.

Some Other Examples
Lock Mechanism
 
@contextmanager
def locked(lock):
  lock.acquired()
  try:
    yield
  finally:
    lock.release()
Standard Output Redirection

 
@contextmanager
def stdout_redirect(new_stdout):
  old_stdout = sys.stdout
  sys.stdout = new_stdout
  try:
    yield
  finally:
    sys.stdout = old_stdout
 
with open("file.txt", "w") as f:
  with stdout_redirect(f):
    print "hello world"
Reference Materials

The Python “with” Statement by Example

 