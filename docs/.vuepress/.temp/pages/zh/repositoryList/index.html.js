import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/zh/repositoryList/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/repositoryList/\",\"title\":\"代码库列表\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"代码库列表\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"repository\"},\"layout\":\"RepositoryHome\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
