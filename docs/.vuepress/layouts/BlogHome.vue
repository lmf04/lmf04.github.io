<template>
    <ParentLayout>
        <template #page>
            <div class="vp-page blog-page-wrapper">
                <Left_CN v-if="lang == 'zh-CN'" />
                <Left v-else> </Left>
                <div class="vp-blog-main">
                    <div class="vp-blog-main-box">
                        <div>
                            <h1>{{ blogTitle }}</h1>
                            <ul>
                                <li v-for="(post, i) in blogPosts" :key="i">
                                    <router-link :to="post.path">{{ post.info.title }}</router-link>
                                    <span v-if="post.info.date">{{ (post.info.date) }}</span>

                                    <div>{{ post.info.description }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer_CN v-if="lang == 'zh-CN'" />
            <Footer v-else />
        </template>
    </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

import { useBlogType } from '@vuepress/plugin-blog/client';
import { computed } from 'vue';
import { useLang } from './useLang'
import Footer from '../components/Footer.vue'
import Left from '../components/Left.vue'
import Left_CN from '../components/Left_CN.vue'
import Footer_CN from '../components/Footer_CN.vue'
const lang = computed(() => useLang());

// console.log("--------------",_value)
// var  _value="zh-CN"
// const blogTypeKey = computed(() => _value === 'zh-CN' ? 'post-zh' : 'post');
const { items: blogPosts } = useBlogType('post').value;
console.log("----------blogPosts----", blogPosts)

const blogTitle = computed(() => useLang() === 'zh-CN' ? '文章列表' : 'Article List');

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};


</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    border-bottom: 1px solid #e2e2e3;
    padding: 0 0 10px 0;
}

span {
    margin-left: 10px;
    color: #888;
    font-size: 0.9em;
}
</style>