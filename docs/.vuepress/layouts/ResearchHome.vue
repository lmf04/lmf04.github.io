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
                                <li class="s-li" v-for="(post, i) in blogPosts" :key="i">
                                    <router-link :to="post.path">{{i+1}}. {{ post.info.title }}</router-link>
                                    <span v-if="post.info.date">{{ (post.info.date) }}</span>
                                    <div style="margin-top: 5px;">导师：{{ post.info.teacher }}</div>
                                    <div style="margin-top: 5px;">{{ post.info.description }}</div>
                                    <div  style="margin-top: 5px;">贡献：

                                        <div v-for="(item,i) in post.info.contribution" :key="i">
                                            <span style="color: blue;">*</span> {{ item }}</div>
                                    </div>
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
const { items: blogPosts } = useBlogType('research').value;
console.log("----------blogPosts----", blogPosts)

const blogTitle = computed(() => useLang() === 'zh-CN' ? '科研列表' : 'Research List');

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
    border-bottom: 1px solid var(--vp-c-border);
    padding: 0 0 10px 0;
}

span {
    margin-left: 10px;
    color: #888;
    font-size: 0.9em;
}
</style>