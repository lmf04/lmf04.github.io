<template>
    <div>
        <iframe :src="src" id="outerPage" width="100%" class="frame-box" frameborder="0" :style="`border: none; height: ${height}px; overflow: hidden;`"
             />
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
    src: { type: String, required: true }
});


// const height = ref(100);
 
</script>
<style lang="scss">
.frame-box{
    height: calc(100vh - 270px);
}
</style>