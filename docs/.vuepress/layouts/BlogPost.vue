<template>
    <ParentLayout>
        <template #page>
            <div class="vp-page blog-page-wrapper">
                <Left_CN v-if="lang == 'zh-CN'" />
                <Left v-else> </Left>
                <div class="vp-blog-main">
                    <div class="vp-blog-main-box">
                        <div>
                            <h1>{{ _value.title }}</h1>
                            <p v-if="_value.frontmatter.date">{{ _value.frontmatter.date }}</p>

                            <p>{{ _value.frontmatter.description }}</p>
                            <div v-if="_value.frontmatter.link && _value.frontmatter.link.length>1">
                             
                                <AutoIframe :src="_value.frontmatter.link"></AutoIframe>
                            </div>
                            <Content v-else />
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
import AutoIframe from '../components/AutoIframe.vue'

const lang = computed(() => useLang());

console.log('usePageData()1111', usePageLang())
const { _value } = usePageData();

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

</script>

<style scoped>

:deep(.vp-blog-main-box img){
    max-width: 100%;
}

.iframe-box{
    border: none;
    width: 100%;
    height: calc(100vh - 270px);
}
h1 {
    margin-bottom: 10px;
}

p {
    color: #888;
    font-size: 0.9em;
    margin-bottom: 20px;
}
</style>