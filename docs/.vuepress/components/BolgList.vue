<template>
    <ul>
        <template v-for="(post, i) in blogPosts" :key="i">
            <li v-if="i < 3" :style="i==2? 'border-bottom:none':''">
                <router-link :to="post.path">📌  <b>{{ post.info.title }}</b> </router-link>
                <div>
                    <span v-if="post.info.date">{{ (post.info.date) }}</span> 
                    <span v-if="post.info.category && post.info.category.length>0">|</span>
                    <span v-if="post.info.category && post.info.category.length>0">
                        <span v-for="(cat,c) in post.info.category" :key="c"> {{ cat }}
                            <span v-if="c<post.info.category.length">·</span>
                        </span>
                        
                    </span>
                </div>
                <div>{{ post.info.description }}</div>
               
            </li>
        </template>
    </ul>
</template>

<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client';

const { items: blogPosts } = useBlogType('post').value;

</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    border-bottom: 1px solid var(--vp-c-gutter, #e2e2e3);
    padding: 0 0 10px 0;
}

span {
    margin-left: 10px;
    color: #888;
    font-size: 0.9em;
}
</style>