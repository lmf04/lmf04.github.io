import comp from "D:/test/template/lmf04.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"layout\":\"Empty\"},\"headers\":[],\"git\":{\"updatedTime\":1741848364000,\"contributors\":[{\"name\":\"2935580139@qq.com\",\"username\":\"2935580139@qq.com\",\"email\":\"2935580139@qq.com\",\"commits\":1,\"url\":\"https://github.com/2935580139@qq.com\"}],\"changelog\":[{\"hash\":\"2de90227ea5bda0ed1f22282a8f3f3289e48a111\",\"time\":1741848364000,\"email\":\"2935580139@qq.com\",\"author\":\"2935580139@qq.com\",\"message\":\"init\"}]},\"filePathRelative\":\"index.md\"}")
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
