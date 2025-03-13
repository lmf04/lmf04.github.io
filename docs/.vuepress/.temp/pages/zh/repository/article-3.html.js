import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/zh/repository/article-3.html.vue"
const data = JSON.parse("{\"path\":\"/zh/repository/article-3.html\",\"title\":\"蛋白质相互作用影响\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"RepositoryPost\",\"archive\":true,\"date\":2024.02,\"star\":100,\"fork\":3,\"title\":\"蛋白质相互作用影响\",\"description\":\"蛋白质-蛋白质相互作用（PPIs）在细胞内的几乎所有生物过程中都扮演着至关重要的角色。这些相互作用不仅影响细胞的正常生理功能，还在疾病的发生和发展中起着关键作用\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"zh/repository/article-3.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>蛋白质预测 朋</p>\\n\"}")
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
