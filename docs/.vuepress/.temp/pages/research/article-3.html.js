import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/research/article-3.html.vue"
const data = JSON.parse("{\"path\":\"/research/article-3.html\",\"title\":\"细胞识别计数\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"ResearchPost\",\"archive\":true,\"date\":\"2024.02-2024.03\",\"title\":\"细胞识别计数\",\"description\":\"在生物科研中经常需要细胞识别计数，通常用人工数的方式很费时间，开发一个AI识别细胞并计数的工具迅速完成计数工作。\",\"teacher\":\"大东大学张教授\",\"contribution\":[\"工具框架设计，算法设计\",\"代码编写、训练、测试\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"research/article-3.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.\\n333</p>\\n\"}")
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
