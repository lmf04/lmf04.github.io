import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/blogList/index.html.vue"
const data = JSON.parse("{\"path\":\"/blogList/\",\"title\":\"BlogList\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"BlogList\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"post\"},\"layout\":\"BlogHome\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
