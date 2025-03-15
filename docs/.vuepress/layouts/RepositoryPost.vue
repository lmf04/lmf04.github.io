<template>
    <ParentLayout>
        <template #page>
            <div class="vp-page blog-page-wrapper">
                <Left_CN v-if="lang == 'zh-CN'" />
                <Left v-else> </Left>
                <div class="vp-blog-main">
                    <div class="vp-blog-main-box">
                        <div>
                            <h1>{{ _value.title }} <span style="font-size: 14px;">{{ _value.frontmatter.date }}</span> </h1>
                            <div style="margin-top: 10px;">{{ _value.frontmatter.description }}</div>
                            <div class="git-box" style="margin-top: 5px;">
                                <div>
                                    fork:{{ _value.frontmatter.fork }}
                                </div>
                                <div>
                                    star:{{ _value.frontmatter.star }}
                                </div>
                                <div>
                                    address： <a :href="_value.frontmatter.address"> {{ _value.frontmatter.address }}</a>
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
 
.git-box{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid var(--vp-c-border);
    padding-bottom: 10px;
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