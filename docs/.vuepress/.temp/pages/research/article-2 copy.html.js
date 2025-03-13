import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/research/article-2 copy.html.vue"
const data = JSON.parse("{\"path\":\"/research/article-2%20copy.html\",\"title\":\"PDAC组织和外周血中巨噬细胞的变化\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2024.01至今\",\"archive\":true,\"layout\":\"ResearchPost\",\"title\":\"PDAC组织和外周血中巨噬细胞的变化\",\"description\":\"PDAC是致死率极高的疾病，其发现晚且治疗后效果不佳，通过生物信息学技术分析健康组织和外周血和PDAC组织和PDAC患者的外周血中的巨噬细胞和基因表达的差异，了解PDAC患病初期时组织和外周血中的基因表达情况和巨噬细胞的状况，可以助于提早发现PDAC的产生。\",\"teacher\":\"耶鲁大学陈教授\",\"contribution\":[\"R语言分析代码开发，使用了SeuratV5、ggplot2、jalviewg等分析包，见代码库\",\"撰写了论文《XXXX》（目前正在修订中，预计于 2025 年第二季度出版）\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"research/article-2 copy.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p><a href=\\\"https://github.com/lmf04/Single-cell-analysis\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">见代码库</a>\\nHere is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.\\n333</p>\\n\"}")
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
