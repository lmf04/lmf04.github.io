import comp from "D:/test/template/lmf04.github.io/docs/.vuepress/.temp/pages/research/article-1.html.vue"
const data = JSON.parse("{\"path\":\"/research/article-1.html\",\"title\":\"海洋微生物对海洋环境的影响\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2023.06-2024.04\",\"archive\":true,\"layout\":\"ResearchPost\",\"title\":\"海洋微生物对海洋环境的影响\",\"description\":\"通过研究海水中的微生物发现微生物和水中的盐度和碳含量强相关，微生物较多的水里碳含量更加稳定，获取得了国家三等奖。\",\"teacher\":\"山东大学董导师\",\"contribution\":[\"全程参与湿实验碳含量测定等\",\"主要用R语言进行了随机森林分析数据并绘制数据视图\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1741848364000,\"contributors\":[{\"name\":\"2935580139@qq.com\",\"username\":\"2935580139@qq.com\",\"email\":\"2935580139@qq.com\",\"commits\":1,\"url\":\"https://github.com/2935580139@qq.com\"}],\"changelog\":[{\"hash\":\"2de90227ea5bda0ed1f22282a8f3f3289e48a111\",\"time\":1741848364000,\"email\":\"2935580139@qq.com\",\"author\":\"2935580139@qq.com\",\"message\":\"init\"}]},\"filePathRelative\":\"research/article-1.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.\\n333</p>\\n\"}")
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
