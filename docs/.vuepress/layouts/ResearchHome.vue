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
                                    <router-link :to="post.path"><b>{{ i + 1 }}. {{ post.info.title }}</b></router-link>
                                    <span v-if="post.info.date">{{ (post.info.date) }}</span>
                                    <div v-if="lang == 'zh-CN'" style="margin-top: 5px;"><b>导师</b>：{{ post.info.teacher }}
                                    </div>
                                    <div v-else style="margin-top: 5px;"><b>Supervisor</b>:{{ post.info.teacher }}</div>

                                    <div v-if="lang == 'zh-CN'" style="margin-top: 5px;"><b>研究背景与目标</b>：{{
                                        post.info.description }}</div>
                                    <div v-else style="margin-top: 5px;"><b>Research Background and Objectives</b>:{{ post.info.description }}</div>

                                    <template v-if="lang == 'zh-CN'">
                                        <div style="margin-top: 5px;"
                                            v-if="post.info.progress && post.info.progress.length > 1"><b>研究进展</b>：{{
                                                post.info.progress }}</div>

                                        <div style="margin-top: 5px;"
                                            v-if="post.info.findings && post.info.findings.length > 0">
                                            <b>研究成果</b>：
                                            <div v-for="(item, i) in post.info.findings" :key="i">
                                                <span style="color: blue;">*</span> {{ item }}
                                            </div>
                                        </div>
                                        <div style="margin-top: 5px;"><b>个人贡献</b>：

                                            <div v-for="(item, i) in post.info.contribution" :key="i">
                                                <span style="color: blue;">*</span> {{ item }}
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div style="margin-top: 5px;"
                                            v-if="post.info.progress && post.info.progress.length > 1"><b>Research Progress</b>:{{
                                                post.info.progress }}</div>
                                        <div style="margin-top: 5px;"
                                            v-if="post.info.findings && post.info.findings.length > 0">
                                            <b>Research Findings</b>:
                                            <div v-for="(item, i) in post.info.findings" :key="i">
                                                <span style="color: blue;">*</span> {{ item }}
                                            </div>
                                        </div>
                                        <div style="margin-top: 5px;"><b>Personal Contributions</b>:

                                            <div v-for="(item, i) in post.info.contribution" :key="i">
                                                <span style="color: blue;">*</span> {{ item }}
                                            </div>
                                        </div>
                                    </template>


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