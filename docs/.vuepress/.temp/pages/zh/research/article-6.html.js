import comp from "D:/test/template/lmf04.github.io/docs/.vuepress/.temp/pages/zh/research/article-6.html.vue"
const data = JSON.parse("{\"path\":\"/zh/research/article-6.html\",\"title\":\"蛋白质相互作用的影响\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"ResearchPost\",\"archive\":true,\"date\":\"2025.02至今\",\"title\":\"蛋白质相互作用的影响\",\"description\":\"预测蛋白质相互作用影响。\",\"teacher\":\"大东大学张教授\",\"contribution\":[\"用pytorch训练AI\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1741848364000,\"contributors\":[{\"name\":\"2935580139@qq.com\",\"username\":\"2935580139@qq.com\",\"email\":\"2935580139@qq.com\",\"commits\":1,\"url\":\"https://github.com/2935580139@qq.com\"}],\"changelog\":[{\"hash\":\"2de90227ea5bda0ed1f22282a8f3f3289e48a111\",\"time\":1741848364000,\"email\":\"2935580139@qq.com\",\"author\":\"2935580139@qq.com\",\"message\":\"init\"}]},\"filePathRelative\":\"zh/research/article-6.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.\\n333</p>\\n\"}")
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
