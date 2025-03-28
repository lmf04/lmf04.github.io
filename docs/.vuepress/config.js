import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";
import { blogPlugin } from "@vuepress/plugin-blog";
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'

export default defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Menfei Li(黎梦菲)",
  description: "个人学术简历",
  // 多语言配置
  locales: {
    // 英文为默认语言
    "/": {
      lang: "en-US",
      title: "Mengfei Li",
      description: "个人学术简历",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "黎梦菲",
      description: "个人学术简历",
    },
  },
  // 引入自定义 CSS 样式文件
  // head: [
  //   ['link', { rel: 'stylesheet', href: '/styles/index.scss' }]
  // ],
  // 默认主题配置
  theme: defaultTheme({
    logo: "/images/hero.png", //logo图标
    locales: {
      // 英文语言配置
      "/": {
        navbar: [
          { text: "Home", link: "/" },
          { text: "Research", link: "/researchList/" },
          { text: "Repositories", link: "/repositoryList/" },
          { text: "Blog", link: "/blogList/" },
          { text: "CV", link: "/cv" },
        ],
        selectLanguageName: "English",
        selectLanguageText: "Language",
        selectLanguageAriaLabel: "Language",
      },
      // 中文语言配置
      "/zh/": {
        navbar: [
          { text: "首页", link: "/zh/" },
          { text: "科研", link: "/zh/researchList/" },
          { text: "代码库", link: "/zh/repositoryList/" },
          { text: "博客", link: "/zh/blogList/" },
          { text: "简历", link: "/zh/cv" },
        ],
        selectLanguageName: "中文",
        selectLanguageText: "语言",
        selectLanguageAriaLabel: "选择语言",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  }),
  
  plugins: [
    baiduAnalyticsPlugin({
      // 配置项
      id:'5be6c4b07c3038eab60665448843238a'
    }),
    blogPlugin({
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        description: frontmatter.description || "",
        author: frontmatter.author || "",
        sort: frontmatter.sort || 0,
        star: frontmatter.star || "",
        role: frontmatter.role || "",
        technology: frontmatter.technology || "",
        fork: frontmatter.fork || "",
        address: frontmatter.address || "",
        date: frontmatter.date || "",
        category: frontmatter.category || [],
        method: frontmatter.method || [],
        tag: frontmatter.tag || [],
        contribution:frontmatter.contribution || [],
        teacher: frontmatter.teacher || "",
        link: frontmatter.link || "",
        progress: frontmatter.progress || "",
        findings: frontmatter.findings || [],
        projectDescription: frontmatter.projectDescription || [],
        researchFocus: frontmatter.researchFocus || [],
        technicalHighlights: frontmatter.technicalHighlights || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === "string"
            ? frontmatter.excerpt
            : data?.excerpt || "",
      }),
      type: [
        {
          key: "repository",
          filter: (page) =>
            page.path.startsWith("/repository/") ||
            page.path.startsWith("/zh/repository/"),
          sorter: (prev, next) =>
                 Number( prev.frontmatter.sort)-Number(next.frontmatter.sort),
          frontmatter: (localePath) => ({
            title: localePath.startsWith("/zh")
              ? "代码库列表"
              : "repositoryList",
            sidebar: false,
          }),
          path: "/repositoryList/",
          layout: "RepositoryHome",
          itemLayout: "RepositoryPost",
          itemPermalink: "/repository/:year/:month/:day/:slug",
        },
        {
          key: "research",
          filter: (page) =>
            page.path.startsWith("/research/") ||
            page.path.startsWith("/zh/research/"),
          sorter: (prev, next) =>
            Number( prev.frontmatter.sort)-Number(next.frontmatter.sort),
          frontmatter: (localePath) => ({
            title: localePath.startsWith("/zh") ? "科研列表" : "researchList",
            sidebar: false,
          }),
          path: "/researchList/",
          layout: "ResearchHome",
          itemLayout: "ResearchPost",
          itemPermalink: "/research/:year/:month/:day/:slug",
        },
        {
          key: "post",
          filter: (page) =>
            page.path.startsWith("/blog/") || page.path.startsWith("/zh/blog/"),
          sorter: (prev, next) =>
            new Date(next.frontmatter.date) - new Date(prev.frontmatter.date),
          frontmatter: (localePath) => ({
            title: localePath.startsWith("/zh") ? "博客列表" : "BlogList",
            sidebar: false,
          }),
          path: "/blogList/",
          layout: "BlogHome",
          itemLayout: "BlogPost",
          itemPermalink: "/blog/:year/:month/:day/:slug",
        },
      ],
    }),
  ],
  bundler: viteBundler(),
});
