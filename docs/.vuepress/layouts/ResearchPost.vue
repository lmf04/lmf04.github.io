<template>
    <ParentLayout>
        <template #page>
            <div class="vp-page blog-page-wrapper">
                <Left_CN v-if="lang == 'zh-CN'" />
                <Left v-else> </Left>
                <div class="vp-blog-main">
                    <div class="vp-blog-main-box">
                        <div v-if="lang == 'zh-CN'">
                            <h1>{{ _value.title }} </h1>
                            <!-- <div><b>导师</b>：{{ _value.frontmatter.teacher }}</div>
                            <div style="margin-top: 10px;"><b>研究内容</b>：{{ _value.frontmatter.description }}</div>
                         
                            <div style="margin-top: 10px;" v-if="_value.frontmatter.findings && _value.frontmatter.findings.length > 0"><b>核心成果</b>：
                                <div v-for="(item, i) in _value.frontmatter.findings" :key="i">
                                    <span style="color: blue;">⭐</span> <font v-html="item"></font> 
                                </div>
                            </div>
                            
                            <div v-if="_value.frontmatter.category.includes(2)" style="margin-top: 10px;"><b>个人贡献</b>：

                                <div v-for="(item, i) in _value.frontmatter.contribution" :key="i">
                                    <span style="color: blue;">*</span> {{ item }}
                                </div>
                            </div> -->
                            <Content />
                        </div>
                        <div v-else>
                            <h1>{{ _value.title }}  </h1>
                            <!-- <div><b>Supervisor</b>:{{ _value.frontmatter.teacher }}</div>
                            <div style="margin-top: 10px;"><b>Research Background and Objectives</b>：{{ _value.frontmatter.description }}</div>
                            <div style="margin-top: 10px;" v-if="_value.frontmatter.progress && _value.frontmatter.progress.length > 1"><b>Research Progress</b>：{{ _value.frontmatter.description }}</div>
                          
                            <div style="margin-top: 10px;" v-if="_value.frontmatter.findings && _value.frontmatter.findings.length > 0"><b>Research Findings</b>：
                                <div v-for="(item, i) in _value.frontmatter.findings" :key="i">
                                    <span style="color: blue;">*</span> {{ item }}
                                </div>
                            </div>
                            
                            <div style="margin-top: 10px;"><b>Personal Contributions</b>：

                                <div v-for="(item, i) in _value.frontmatter.contribution" :key="i">
                                    <span style="color: blue;">*</span> {{ item }}
                                </div>
                            </div> -->
                            <Content />
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
import { usePageLang, usePageData } from '@vuepress/client';
import { computed } from 'vue';
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import Left from '../components/Left.vue'
import Left_CN from '../components/Left_CN.vue'
import Footer_CN from '../components/Footer_CN.vue'
import { useLang } from './useLang'

const lang = computed(() => useLang());

console.log('usePageData()1111', usePageLang())
const { _value } = usePageData();

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

</script>

<style scoped>
h1 {
    margin-bottom: 10px;
}

p {
    color: #888;
    font-size: 0.9em;
    margin-bottom: 20px;
}

:deep(.vp-blog-main-box img){
    max-width: 100%;
}
</style>