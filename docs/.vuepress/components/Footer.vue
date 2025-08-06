<template>
  <footer class="lp-footer-wrapper" vp-footer="">
    <div class="lp-footer">Default footer<br>Running time: {{date.days}} days {{date.hours}} hours {{date.minutes}} minutes {{date.seconds}} seconds</div>
    <div class="lp-copyright">Copyright © 2024 Miss Li </div>
  </footer>
</template>
<script setup>
import { reactive } from 'vue';

const milliseconds = new Date().getTime() - new Date(2024, 1, 1).getTime();


// 计算总秒数
const totalSeconds = Math.floor(milliseconds / 1000);
// 计算总分钟数
const totalMinutes = Math.floor(totalSeconds / 60);
// 计算总小时数
const totalHours = Math.floor(totalMinutes / 60);

 
// 计算总天数
const days = Math.floor(totalHours / 24);

// 计算剩余小时数
const hours = totalHours % 24;
// 计算剩余分钟数
const minutes = totalMinutes % 60;
// 计算剩余秒数
const seconds = totalSeconds % 60;
// 创建响应式对象
const date = reactive({
  days,
  hours,
  minutes,
  seconds
});

setInterval(() => {
 var milliseconds = new Date().getTime() - new Date(2024, 1, 1).getTime();
 // 计算总秒数
var totalSeconds = Math.floor(milliseconds / 1000);
// 计算总分钟数
var totalMinutes = Math.floor(totalSeconds / 60);
// 计算总小时数
var totalHours = Math.floor(totalMinutes / 60);


  // 计算总天数
 date.days = Math.floor(totalHours / 24);
// 计算剩余小时数
   date.hours = totalHours % 24;
// 计算剩余分钟数
  date.minutes = totalMinutes % 60;
// 计算剩余秒数
  date.seconds = totalSeconds % 60;
}, 1000);
</script>


<style scoped>
/* responsive breakpoints */
/* theme color */
/* Color list */
/* Code Block */
.lp-footer-wrapper {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 0.75rem;
  padding-inline: calc(var(--sidebar-space) + 2rem) 2rem;
  border-top: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-mute);
  text-align: center;
  transition: border-top-color var(--vp-t-color), background var(--vp-t-color), padding var(--vp-t-transform);
}

@media (max-width: 719px) {
  .lp-footer-wrapper {
    padding-inline-start: 2rem;
  }
}

@media (min-width: 1440px) {
  .lp-footer-wrapper {
    z-index: 50;
    padding-inline-start: 2rem;
  }
}

@media print {
  .lp-footer-wrapper {
    margin: 0 !important;
    padding: 0 !important;
  }
}

@media (max-width: 419px) {
  .lp-footer-wrapper {
    display: block;
  }
}

.no-sidebar .lp-footer-wrapper,
.sidebar-collapsed .vp-footer-wrapper {
  padding-inline-start: 2rem;
}

.lp-footer {
  margin: 0.5rem 1rem;
  font-size: 14px;
  border-top: none;
}

@media print {
  .lp-footer {
    display: none;
  }
}

.lp-copyright {
  margin: 6px 0;
  font-size: 13px;
}

.lp-page:not(.not-found)+.vp-footer-wrapper {
  margin-top: -2rem;
}</style>