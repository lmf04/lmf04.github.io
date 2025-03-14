<script setup name="print">

import print from '../public/print'
import { useLang } from '../layouts/useLang'
import { computed } from 'vue';

const printF = () => {

    print(document.getElementById("content").innerHTML, { style: '@media print {*{font-size:12px}  @page {size:210mm 297mm!important;margin: 10mm 15mm;} table{ page-break-after:auto }  tr{page-break-inside:avoid; page-break-after:auto}' })
}
const printText = computed(() => useLang() === 'zh-CN' ? '打印' : 'Print');


</script>

<template>
    <button class="custom-button no-print" @click="printF">{{printText}}</button>
</template>

<style lang="scss" scoped>
.custom-button {
    background-color: #28a745;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.custom-button:hover {
    background-color: #218838;
}
</style>
