import comp from "D:/test/template/lmf04.github.io/docs/.vuepress/.temp/pages/repositoryList/index.html.vue"
const data = JSON.parse("{\"path\":\"/repositoryList/\",\"title\":\"repositoryList\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"repositoryList\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"repository\"},\"layout\":\"RepositoryHome\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
