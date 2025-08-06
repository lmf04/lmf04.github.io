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
                                <li v-for="(post, i) in blogPosts" :key="i"   :style="i >= blogPosts.length-1 ? 'border-bottom:none' : ''">
                                    <router-link :to="post.path">📌 <b>{{ post.info.title }}</b> </router-link>
                                    <div>
                                        <span v-if="post.info.date">{{ (post.info.date) }}</span>
                                        <span v-if="post.info.category && post.info.category.length > 0">|</span>
                                        <span v-if="post.info.category && post.info.category.length > 0">
                                            <span v-for="(cat, c) in post.info.category" :key="c"> {{ cat }}
                                                <span v-if="c < post.info.category.length">·</span>
                                            </span>

                                        </span>
                                    </div>
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
    border-bottom: 1px solid var(--vp-c-gutter, #e2e2e3);
    padding: 0 0 10px 0;
}

span {
    margin-left: 10px;
    color: #888;
    font-size: 0.9em;
}
</style>