import comp from "D:/test/template/lmf04.github.io/docs/.vuepress/.temp/pages/zh/blogList/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/blogList/\",\"title\":\"博客列表\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"博客列表\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"post\"},\"layout\":\"BlogHome\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
