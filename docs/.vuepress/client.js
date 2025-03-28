import { defineClientConfig } from "vuepress/client";
import Empty from "./layouts/Empty.vue";
import BlogHome from "./layouts/BlogHome.vue";
import BlogPost from "./layouts/BlogPost.vue";
import ResearchHome from "./layouts/ResearchHome.vue";
import ResearchPost from "./layouts/ResearchPost.vue";

import RepositoryHome from "./layouts/RepositoryHome.vue";
import RepositoryPost from "./layouts/RepositoryPost.vue";
import Print from "./components/Print.vue";
import BolgList from "./components/BolgList.vue";
import ResearchList from "./components/ResearchList.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Print", Print);
    app.component("ResearchList", ResearchList);
    app.component("DynamicHtml", {
      props: ["content"],
      template: '<font v-html="content"></font>',
    });
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
});
