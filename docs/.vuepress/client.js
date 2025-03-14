import { defineClientConfig } from 'vuepress/client'
import Empty from './layouts/Empty.vue'
import BlogHome from './layouts/BlogHome.vue'
import BlogPost from './layouts/BlogPost.vue'
import ResearchHome from './layouts/ResearchHome.vue'
import ResearchPost from './layouts/ResearchPost.vue'

import RepositoryHome from './layouts/RepositoryHome.vue'
import RepositoryPost from './layouts/RepositoryPost.vue'
import Print from './components/Print.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Print', Print);
  },
  layouts: {
    Empty,
    BlogHome,
    BlogPost,
    ResearchHome,
    ResearchPost,
    RepositoryHome,
    RepositoryPost,
  },
})
