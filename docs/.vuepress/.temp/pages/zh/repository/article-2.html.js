import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/zh/repository/article-2.html.vue"
const data = JSON.parse("{\"path\":\"/zh/repository/article-2.html\",\"title\":\"单细胞分析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"RepositoryPost\",\"archive\":true,\"date\":2024.02,\"star\":100,\"fork\":3,\"title\":\"单细胞分析\",\"description\":\"用seurat处理PDAC患者和作为对照组的健康人的单细胞测序数据，进行了绘制umap图，harmony整合，基因表达差异分析，基因富集通路分析，用squidpy处理PDAC组织的空间转录组结果，单细胞空间转录组学技术通过保留空间信息的同时检测基因表达，克服了传统单细胞测序技术丢失关键空间信息的局限。这些技术在研究早期胚胎发育、人类器官发育、神经系统疾病以及肿瘤微环境中细胞类型和信号通路的空间分布方面具有重要应用\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"zh/repository/article-2.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>蛋白质预测 朋</p>\\n\"}")
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
