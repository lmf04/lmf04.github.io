import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/cv.html.vue"
const data = JSON.parse("{\"path\":\"/cv.html\",\"title\":\"CV\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":false,\"title\":\"CV\",\"layout\":\"Empty\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"cv.md\",\"excerpt\":\"\\n<ul>\\n<li>山东大学,生物科学专业‌, 2022.09-2026.06</li>\\n<li>‌核心课程‌：线型代数、微积分、生物统计学、生物信息学、有机化学及实验、无机及分析化学及实验、物理及实验、物理化学及实验、分子生物学及实验、生物化学及实验、遗传学及实验、结构生物学、细胞生物学及实验、微生物学及实验、免疫生物学、计算思维(C语言及算法)、人工智能基础、matlab数学建模、实验数据分析和软件</li>\\n</ul>\\n<h1>科研</h1>\\n<ul>\\n<li>\\n<p>2023.1-2024.4: 董教授实验室课题研究</p>\\n<ul>\\n<li>内容：微生物群落对海洋环境的影响。</li>\\n<li>(职责)Duties included:实验数据分析,湿实验。</li>\\n<li>(指导)Supervisor: 山东大学董教授</li>\\n</ul>\\n</li>\\n<li>\\n<p>2024.5至今:陈教授实验室科研助手（Research Assistant）</p>\\n<ul>\\n<li>内容：细胞计数工具开发，开发采集器采集ncbi数据，编写机器学习代码，训练预测模型等</li>\\n<li>(职责)Duties included: 科研数据采集、分析、代码编写及构建。</li>\\n<li>(指导)Supervisor: 山东大学陈教授</li>\\n</ul>\\n</li>\\n<li>\\n<p>2024.1-至今: 独立课题研究</p>\\n<ul>\\n<li>内容：通过单细胞数据分析，识别早期癌症。</li>\\n<li>(职责)Duties included: 数据清洗、数据分析、工具开发、论文撰写。</li>\\n<li>(指导)Supervisor: 耶鲁大学张教授</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
