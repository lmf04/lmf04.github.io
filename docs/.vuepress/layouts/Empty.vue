<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { Content } from '@vuepress/client'
import Footer from '../components/Footer.vue'
import Left from '../components/Left.vue'
import Left_CN from '../components/Left_CN.vue'
import Footer_CN from '../components/Footer_CN.vue'

import { computed } from 'vue';
import { useLang } from './useLang'
const lang = computed(() => useLang());
</script>

<template>
  <ParentLayout>
    <template #page>
      <div class="vp-page blog-page-wrapper">
        <Left_CN v-if="lang == 'zh-CN'" />
        <Left v-else> </Left>
        <div class="vp-blog-main">
          <div class="vp-blog-main-box">
            <Content id="content" />
          </div>
        </div>
      </div>
      <Footer_CN v-if="lang == 'zh-CN'" />
      <Footer v-else />
    </template>
    <!-- <template #sidebar>
      <ul>
        <li><a href="#">自定义侧边栏项 1</a></li>
        <li><a href="#">自定义侧边栏项 2</a></li>
      </ul>
    </template> -->
  </ParentLayout>
</template>

<style lang="scss"></style>
