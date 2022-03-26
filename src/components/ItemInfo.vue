<!--
    ItemInfo
    아이템 하나를 나타내는 컴포넌트

    :item: 아이템 정보(ItemData)
    :count: 뽑은 개수(number)
-->

<template>
<div id='item-container'>
    <div class='img-box'>
        <img :src='item.imgSrc' class='item-img'>
        <!--<img :src='' id='tag-img'>-->
    </div>
    <span class='text-wrapper'><strong>{{ item.name }}</strong></span>
    <span class='text-wrapper'>{{ (item.prob * 100).toFixed(2) }}%</span>
    <span class='text-wrapper count-wrapper'>{{ count }}회</span>
</div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
//.ts
import { ItemData } from '../assets/itemsData'

const props = defineProps<{
    item: ItemData, //아이템 정보
    count: number, //뽑은 갯수
}>();
</script>

<style scoped>
#item-container {
    width: max-content;
    margin: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.item-img {
    width: 40px;
    height: 40px;
    margin: auto;
}

.text-wrapper {
    height: auto;
    margin: auto;
    text-align: center;
}

.count-wrapper {
    width: 90px;
    font-size: 20pt;
}
</style>
