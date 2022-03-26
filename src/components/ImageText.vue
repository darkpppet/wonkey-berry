<!--
    ImageText
    이미지랑 내용을 같이 나타내 주는 컴포넌트
    [이미지]<내용> 이런식

    :imgSrc: 이미지 경로
-->

<template>
<span>
    <img :src='imgSrc' class='icon-img'>
    <slot></slot>
</span>
</template>

<script setup lang='ts'>
const props = defineProps<{
    imgSrc: string, //이미지 경로
}>();
</script>

<style scoped>
.icon-img {
    width: 25px;
    height: 25px;
    vertical-align: bottom;
}
</style>
