import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/zh/research/article-5.html.vue"
const data = JSON.parse("{\"path\":\"/zh/research/article-5.html\",\"title\":\"糖基化对三型胶原蛋白热稳定性和疏水性的影响\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"ResearchPost\",\"archive\":true,\"date\":\"2024.12至今\",\"title\":\"糖基化对三型胶原蛋白热稳定性和疏水性的影响\",\"description\":\"三型胶原蛋白在美容方面具有很大潜力，但是其热稳定性差，疏水性强，难以保持液态，探究糖基化是否能让三型胶原蛋白保持液态，提升其在美容美白方面的应用价值。\",\"teacher\":\"大东大学张教授\",\"contribution\":[\"用autodock研究了羟化酶对不同三型胶原蛋白的催化效率\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"zh/research/article-5.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.\\n333</p>\\n\"}")
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
