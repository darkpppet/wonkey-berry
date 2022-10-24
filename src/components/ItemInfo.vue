<!--
    ItemInfo
    아이템 하나를 나타내는 컴포넌트

    :item: 아이템 정보(ItemData)
    :count: 뽑은 개수(number)
-->

<template>
<div id='item-container' :style="borderStyle">
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
import { ref, watch } from 'vue';
//.ts
import { ItemData } from '../assets/itemsData'

const props = defineProps<{
    item: ItemData, //아이템 정보
    count: number, //뽑은 갯수
}>();

const borderStyle = ref({}) //테두리 스타일; 뽑히면 테두리 1초간 생성

watch(
    () => props.count,
    () => {
        if (props.count !== 0) { //뽑히면 테두리 생성 및 1초 후 제거
            drawBorder();
            setTimeout(() => {
                eraseBorder();
            }, 1000);
        } else { //안뽑히면 테두리 바로 제거
            eraseBorder();
        }
    }
)

const drawBorder = () => { //테두리 생성
    borderStyle.value = {
        margin: '7px',
        border: '3px LawnGreen solid',
        borderRadius: '5px'
    }
}

const eraseBorder = () => { //테두리 제거
    borderStyle.value = {
        margin: '10px',
        border: 'none'
    }
}
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
    object-fit: scale-down;
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
