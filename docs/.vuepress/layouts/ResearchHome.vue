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
                                <li class="s-li" v-for="(post, i) in blogPosts" :key="i"
                                    :style="i >= blogPosts.length - 1 ? 'border-bottom:none' : ''">
                                    <router-link :to="post.path"><b>{{ i + 1 }}. {{ post.info.title }}</b></router-link>

                                    <div v-if="lang == 'zh-CN'" style="margin-top: 5px;">
                                        <b v-if="post.info.category && post.info.category.length>0"> {{ post.info.category[1] }} </b> | <b>{{ post.info.date }}</b> |
                                        <b>导师</b>：<b>{{ post.info.teacher }}</b>
                                    </div>
                                    <div v-else style="margin-top: 5px;"><b>Advisor</b>:<b>{{ post.info.teacher }}</b></div>
                                    <template v-if="post.info.description">
                                        <div v-if="lang == 'zh-CN'" style="margin-top: 5px;">
                                            <b>研究内容</b>：{{ post.info.description }}
                                        </div>
                                        <div v-else style="margin-top: 5px;"><b>Research Focus</b>:{{
                                            post.info.description }}</div>
                                    </template>


                                    <template v-if="post.info.role">
                                        <div v-if="lang == 'zh-CN'" style="margin-top: 5px;">
                                            <b>个人角色</b>：{{ post.info.role }}
                                        </div>
                                        <div v-else style="margin-top: 5px;"><b>Role</b>:{{
                                            post.info.role }}</div>
                                    </template>

                                    <template v-if="lang == 'zh-CN'">
                                        <!-- <div style="margin-top: 5px;"
                                            v-if="post.info.progress && post.info.progress.length > 1"><b>研究进展</b>：{{
                                                post.info.progress }}</div> -->

                                        <div style="margin-top: 5px;"
                                            v-if="post.info.findings && post.info.findings.length > 0">
                                            <b>核心成果</b>：
                                            <div v-for="(item, i) in post.info.findings" :key="i">
                                                <span style="color: blue;">⭐</span>
                                                <span v-html="item"></span>
                                            </div>
                                        </div>
                                        <div v-if="post.info.contribution && post.info.contribution.length > 0"
                                            style="margin-top: 5px;"><b>具体贡献</b>：

                                            <div v-for="(item, i) in post.info.contribution" :key="i">
                                                <span style="color: blue;">⭐</span>
                                                <span v-html="item"></span>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div style="margin-top: 5px;"
                                            v-if="post.info.findings && post.info.findings.length > 0">
                                            <b>Research Focus</b>:
                                            <div v-for="(item, i) in post.info.findings" :key="i">
                                                <span style="color: blue;">⭐</span>
                                                <span v-html="item"></span>
                                            </div>
                                        </div>
                                        <div v-if="post.info.contribution && post.info.contribution.length > 0"
                                            style="margin-top: 5px;"><b>Key Contributions</b>:

                                            <div v-for="(item, i) in post.info.contribution" :key="i">
                                                <span style="color: blue;">⭐</span>
                                                <span v-html="item"></span>
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

const hasHtml = (str) =>  {
    const regex = /<[a-zA-Z][^>]*>/;
    return regex.test(str);
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

/* span {
    margin-left: 10px;
    color: #888;
    font-size: 0.9em;
} */
</style>