---
layout: BlogPost
date: 2025.01.12 
archive: true
title: Python 中的with关键字使用详解
category: 
  - python学习
description: 在 Python 2.5 中， with 关键字被加入。它将常用的 try ... except ... finally ... 模式很方便的被复用。
---
以下是整理后的 Markdown 格式内容：

## `with` 的引入与作用

在 Python 2.5 中，`with` 关键字被引入，用于简化常见的 `try ... except ... finally ...` 模式。它允许我们将资源管理（如文件、数据库事务等）封装为上下文管理器，从而确保资源在使用后被正确释放。

### 经典示例：文件操作

```python
with open('file.txt') as f:
    content = f.read()
```

在这段代码中，无论 `with` 块中是否发生异常，文件最终都会被关闭。如果块中发生异常，异常会在文件关闭后抛出。

### 数据库事务示例

传统的数据库事务代码通常如下：

```python
db.begin()
try:
    # 执行一些操作
except:
    db.rollback()
    raise
finally:
    db.commit()
```

如果使用支持 `with` 的上下文管理器，代码可以简化为：

```python
with transaction(db):
    # 执行一些操作
```

## `with` 的执行过程

`with` 表达式的基本结构如下：

```python
with EXPR as VAR:
    BLOCK
```

其中：
- `EXPR` 是任意表达式，返回一个上下文管理器。
- `as VAR` 是可选的，用于接收上下文管理器的返回值。

### 执行步骤

1. **计算表达式**：计算 `EXPR`，获取一个上下文管理器。
2. **保存退出方法**：将上下文管理器的 `__exit__` 方法保存起来。
3. **调用 `__enter__` 方法**：执行上下文管理器的 `__enter__` 方法。
4. **赋值变量**：如果 `with` 表达式包含 `as VAR`，则将 `EXPR` 的返回值赋值给 `VAR`。
5. **执行块代码**：执行 `BLOCK` 中的代码。
6. **调用 `__exit__` 方法**：无论 `BLOCK` 是否发生异常，都会调用 `__exit__` 方法。如果发生异常，异常的类型、值和 traceback 将作为参数传递给 `__exit__` 方法；否则传递三个 `None`。

用伪代码表示如下：

```python
mgr = EXPR
exit = type(mgr).__exit__
value = type(mgr).__enter__(mgr)
exc = True

try:
    try:
        VAR = value  # 如果有 as VAR
        BLOCK
    except:
        exc = False
        if not exit(mgr, *sys.exc_info()):
            raise
finally:
    if exc:
        exit(mgr, None, None, None)
```

### 关键细节

- 如果上下文管理器缺少 `__enter__` 或 `__exit__` 方法，解释器会抛出 `AttributeError`。
- 如果 `BLOCK` 中发生异常，`__exit__` 方法返回 `True` 时，异常不会被抛出，后续代码会继续执行。

## 实现上下文管理器的两种方式

### 方法 1：实现上下文管理器类

通过实现一个类并定义 `__enter__` 和 `__exit__` 方法，可以创建支持 `with` 的上下文管理器。

```python
class transaction(object):
    def __init__(self, db):
        self.db = db

    def __enter__(self):
        self.db.begin()

    def __exit__(self, type, value, traceback):
        if type is None:
            self.db.commit()
        else:
            self.db.rollback()
```

### 方法 2：使用生成器装饰器

Python 标准库中的 `contextlib.contextmanager` 装饰器可以通过生成器实现上下文管理器。

```python
from contextlib import contextmanager

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
```

#### 执行过程

1. `contextmanager` 装饰器将生成器函数包装为一个帮助函数。
2. `with` 表达式调用 `transaction(db)`，实际上是调用帮助函数。
3. 帮助函数创建一个 `GeneratorContextManager` 实例作为上下文管理器。
4. 调用 `__enter__` 方法时，生成器执行到 `yield` 处暂停，并返回 `yield` 的值。
5. `BLOCK` 执行结束后，调用 `__exit__` 方法，继续执行生成器的剩余代码。

## 示例：锁机制与标准输出重定向

### 锁机制

```python
@contextmanager
def locked(lock):
    lock.acquire()
    try:
        yield
    finally:
        lock.release()
```

### 标准输出重定向

```python
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
        print("hello world")
```

## 总结

Python 的 `with` 表达式结合了生成器、装饰器和异常处理等特性，是一种非常强大的工具。理解其工作原理并灵活应用，可以显著提高代码的可读性和健壮性。
 
 