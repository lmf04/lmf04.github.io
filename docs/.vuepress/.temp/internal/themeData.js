export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Research\",\"link\":\"/researchList/\"},{\"text\":\"Repositories\",\"link\":\"/repositoryList/\"},{\"text\":\"Blog\",\"link\":\"/blogList/\"},{\"text\":\"CV\",\"link\":\"/cv\"}],\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Language\",\"selectLanguageAriaLabel\":\"Language\"},\"/zh/\":{\"navbar\":[{\"text\":\"首页\",\"link\":\"/zh/\"},{\"text\":\"科研\",\"link\":\"/zh/researchList/\"},{\"text\":\"代码库\",\"link\":\"/zh/repositoryList/\"},{\"text\":\"博客\",\"link\":\"/zh/blogList/\"},{\"text\":\"简历\",\"link\":\"/zh/cv\"}],\"selectLanguageName\":\"中文\",\"selectLanguageText\":\"语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
