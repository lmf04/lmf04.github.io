export const typesMap = JSON.parse("{\"repository\":{\"/\":{\"path\":\"/repositoryList/\",\"indexes\":[0,1,2]},\"/zh/\":{\"path\":\"/zh/repositoryList/\",\"indexes\":[3,4,5]}},\"research\":{\"/\":{\"path\":\"/researchList/\",\"indexes\":[6,7,8,9,10,11]},\"/zh/\":{\"path\":\"/zh/researchList/\",\"indexes\":[12,13,14,15,16,17]}},\"post\":{\"/\":{\"path\":\"/blogList/\",\"indexes\":[18,19]},\"/zh/\":{\"path\":\"/zh/blogList/\",\"indexes\":[20,21]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

