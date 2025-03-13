import comp from "D:/test/template/lmf04.github.io/docs/.vuepress/.temp/pages/blog/article-1.html.vue"
const data = JSON.parse("{\"path\":\"/blog/article-1.html\",\"title\":\"Python 中的with关键字使用详解\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"BlogPost\",\"date\":\"2025-01-12T00:00:00.000Z\",\"archive\":true,\"title\":\"Python 中的with关键字使用详解\",\"description\":\"在 Python 2.5 中， with 关键字被加入。它将常用的 try ... except ... finally ... 模式很方便的被复用。看一个最经典的例\"},\"headers\":[],\"git\":{\"updatedTime\":1741848364000,\"contributors\":[{\"name\":\"2935580139@qq.com\",\"username\":\"2935580139@qq.com\",\"email\":\"2935580139@qq.com\",\"commits\":1,\"url\":\"https://github.com/2935580139@qq.com\"}],\"changelog\":[{\"hash\":\"2de90227ea5bda0ed1f22282a8f3f3289e48a111\",\"time\":1741848364000,\"email\":\"2935580139@qq.com\",\"author\":\"2935580139@qq.com\",\"message\":\"init\"}]},\"filePathRelative\":\"blog/article-1.md\",\"excerpt\":\"<p>在 Python 2.5 中， with 关键字被加入。它将常用的 try ... except ... finally ... 模式很方便的被复用。看一个最经典的例子：</p>\\n<p>?\\n1\\n2\\nwith open('file.txt') as f:\\ncontent = f.read()\\n在这段代码中，无论 with 中的代码块在执行的过程中发生任何情况，文件最终都会被关闭。如果代码块在执行的过程中发生了一个异常，那么在这个异常被抛出前，程序会先将被打开的文件关闭。</p>\\n<p>再看另外一个例子。</p>\\n<p>在发起一个数据库事务请求的时候，经常会用类似这样的代码：</p>\\n<p>?\\n1\\n2\\n3\\n4\\n5\\n6\\n7\\n8\\n9\\ndb.begin()</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
