import { defineClientConfig } from 'vuepress/client'
import Empty from './layouts/Empty.vue'
import BlogHome from './layouts/BlogHome.vue'
import BlogPost from './layouts/BlogPost.vue'
import ResearchHome from './layouts/ResearchHome.vue'
import ResearchPost from './layouts/ResearchPost.vue'

import RepositoryHome from './layouts/RepositoryHome.vue'
import RepositoryPost from './layouts/RepositoryPost.vue'

export default defineClientConfig({
  layouts: {
    Empty,
    BlogHome,
    BlogPost,
    ResearchHome,
    ResearchPost,
    RepositoryHome,
    RepositoryPost
  },
})
