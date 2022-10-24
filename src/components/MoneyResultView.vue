<!--
    MoneyResultView
    사용한 재화를 나타내는 컴포넌트

    :itemType: 아이템 종류(string(ItemName))
    :itemCount: 총 사용 횟수(number)
-->

<template>
<div class='result-container'>
    <!-- 원더베리 -->
    <div v-if='itemType==="WispsWonderberry"'>
        <ImageText :imgSrc='"images/위습의원더베리.png"'>
            사용개수: {{ useCount }}개
        </ImageText>
        &nbsp;
        <ImageText :imgSrc='"images/캐시.png"'>
            누적금액: {{ (useCount * 5400).toLocaleString() }}원
        </ImageText>
    </div>
    <!-- 루나 크리스탈 -->
    <div v-else>
        <ImageText :imgSrc='"images/루나크리스탈.png"'>
            사용개수: {{ useCount }}개
        </ImageText>
        &nbsp;
        <ImageText :imgSrc='"images/캐시.png"'>
            누적금액: {{ (useCount * 3900).toLocaleString() }}원
        </ImageText>
        <div class='split-bar'></div>
        <!-- 루나 크리스탈 스윗 -->
        <div v-if='itemType==="LunaCrystalSweet"'>
            <ImageText :imgSrc='"images/원더블랙.png"'>
                원더 블랙 사용 개수: {{ useCount * 2 }}개
            </ImageText>
        </div>
        <!-- 루나 크리스탈 드림 -->
        <div v-else>
            <span>
                <ImageText :imgSrc='"images/루나스윗.png"'>
                    루나 스윗 사용 개수: {{ useCount }}개
                </ImageText>
                &nbsp;
                <ImageText :imgSrc='"images/원더블랙.png"'>
                    원더 블랙 사용 개수: {{ useCount }}개
                </ImageText>
            </span>
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
//.ts
import { ItemName } from '../assets/itemsData'
//component
import ImageText from './ImageText.vue'

const props = defineProps<{
    itemType: ItemName, //아이템 종류
    useCount: number, //총 사용 횟수
}>();
</script>

<style scoped>
.split-bar {
    margin: 5px;
}
</style>
