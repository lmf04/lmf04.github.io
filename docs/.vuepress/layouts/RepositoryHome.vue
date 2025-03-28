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
                            <template v-if="lang == 'zh-CN'">
                                <ul>
                                    <li v-for="(post, i) in blogPosts" :key="i"
                                        :style="i >= blogPosts.length - 1 ? 'border-bottom:none' : ''">
                                        <router-link :to="post.path"><b>{{ i + 1 }}、{{ post.info.title }}</b></router-link>
                                        <div style="margin-top: 5px;"><b>仓库地址</b>：<a :href="post.info.address">{{
                                            post.info.address }}</a></div>
                                        <div style="margin-top: 5px;"><b>Fork/Star</b>：{{ post.info.fork }}/{{
                                            post.info.star }}</div>
                                        <!-- <div style="margin-top: 5px;">
                                            <b>研究方向</b>：
                                            <div v-for="(item, i) in post.info.researchFocus" :key="i">
                                                <span style="color: blue;">⭐</span> {{ item }}
                                            </div>
                                        </div> -->
                                        <div style="margin-top: 5px;">
                                            <b>项目描述</b>：
                                            <div v-for="(item, i) in post.info.projectDescription" :key="i">
                                                <span style="color: blue;">⭐</span> {{ item }}
                                            </div>
                                        </div>

                                        <div style="margin-top: 5px;">
                                            <b>技术亮点</b>：
                                            <div v-for="(item, i) in post.info.technicalHighlights" :key="i">
                                                <span style="color: blue;">⭐</span> {{ item }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </template>
                            <template v-else>
                                <ul>
                                    <li v-for="(post, i) in blogPosts" :key="i"
                                        :style="i >= blogPosts.length - 1 ? 'border-bottom:none' : ''">
                                        <router-link :to="post.path"><b>{{ i + 1 }}、{{ post.info.title }}</b></router-link>
                                        <div style="margin-top: 5px;"><b>Repository</b>：<a :href="post.info.address">{{
                                            post.info.address }}</a></div>
                                        <div style="margin-top: 5px;"><b>Fork/Star</b>：{{ post.info.fork }}/{{
                                            post.info.star }}</div>
                                        <div style="margin-top: 5px;">
                                            <b>Research Focus</b>：
                                            <div v-for="(item, i) in post.info.researchFocus" :key="i">
                                                <span style="color: blue;">⭐</span> {{ item }}
                                            </div>
                                        </div>
                                        <div style="margin-top: 5px;">
                                            <b>Project Description</b>：
                                            <div v-for="(item, i) in post.info.projectDescription" :key="i">
                                                <span style="color: blue;">⭐</span> {{ item }}
                                            </div>
                                        </div>

                                        <div style="margin-top: 5px;">
                                            <b>Technical Highlights</b>：
                                            <div v-for="(item, i) in post.info.technicalHighlights" :key="i">
                                                <span style="color: blue;">⭐</span> {{ item }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </template>

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
const { items: blogPosts } = useBlogType('repository').value;
console.log("----------blogPosts----", blogPosts)

const blogTitle = computed(() => useLang() === 'zh-CN' ? '仓库列表' : 'Repository List');

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};


</script>

<style scoped>
.git-box {
    display: flex;
    justify-content: space-around;
}

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