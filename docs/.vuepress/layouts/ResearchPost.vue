<template>
    <ParentLayout>
        <template #page>
            <div class="vp-page blog-page-wrapper">
                <Left_CN v-if="lang == 'zh-CN'" />
                <Left v-else> </Left>
                <div class="vp-blog-main">
                    <div class="vp-blog-main-box">
                        <div>
                            <h1>{{ _value.title }}  <span style="font-size: 14px;">{{ _value.frontmatter.date }}</span> </h1>
                            <div>导师：{{ _value.frontmatter.teacher }}</div>
                            <div style="margin-top: 10px;">{{ _value.frontmatter.description }}</div>
                            <div style="margin-top: 10px;">贡献：

                                <div v-for="(item, i) in _value.frontmatter.contribution" :key="i">
                                    <span style="color: blue;">*</span> {{ item }}
                                </div>
                            </div>
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
</style>