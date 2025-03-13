import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/researchList/index.html.vue"
const data = JSON.parse("{\"path\":\"/researchList/\",\"title\":\"researchList\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"researchList\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"research\"},\"layout\":\"ResearchHome\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
