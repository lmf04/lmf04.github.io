export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Menfei Li(黎梦菲)\",\"description\":\"个人学术简历\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/styles/index.scss\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Mengfei Li\",\"description\":\"个人学术简历\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"黎梦菲\",\"description\":\"个人学术简历\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
