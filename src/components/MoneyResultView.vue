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
        <ImageText :imgSrc='"https://w.namu.la/s/21591ef8728b01c5e78ab0de23f5a3e588818baf14b3b28e2308986c534de40a2248c1587411b27487c464bee3a042c70bffee6101efaad9c45639bc8acb1757fafc27d94168c1284de2254c246b581a5cddf6996cb929a35ec2343c87ddf2da"'>
            사용개수: {{ useCount }}개
        </ImageText>
        &nbsp;
        <ImageText :imgSrc='"https://w.namu.la/s/ca58113678b3a6f59846eb3e9f2904d7b248e0646dff0a7aa8973ea079b1dd8e62e2dec292ec51334239d71e9f37a1831c8d00bced48a201e67e520eb35fb1f00bf7e84904888cdf5e21d8e267458cf798dbc1ddaadc5a8448529ffc029aef22"'>
            누적금액: {{ (useCount * 5400).toLocaleString() }}원
        </ImageText>
    </div>
    <!-- 루나 크리스탈 -->
    <div v-else>
        <ImageText :imgSrc='"https://w.namu.la/s/55a49812241f837105c7dd9e9ad3fae8dc6e5df939e2f28ec6c3c85ae1a93f52b15258d89e3c988a340c2d6745b26e4003f70bd917ddb784e6d63711dc9e371622b8e98971f4a4795f6768cfd002d80fb7448046dda0bd3ed7670f9f5636b47c"'>
            사용개수: {{ useCount }}개
        </ImageText>
        &nbsp;
        <ImageText :imgSrc='"https://w.namu.la/s/ca58113678b3a6f59846eb3e9f2904d7b248e0646dff0a7aa8973ea079b1dd8e62e2dec292ec51334239d71e9f37a1831c8d00bced48a201e67e520eb35fb1f00bf7e84904888cdf5e21d8e267458cf798dbc1ddaadc5a8448529ffc029aef22"'>
            누적금액: {{ (useCount * 3900).toLocaleString() }}원
        </ImageText>
        <!-- 루나 크리스탈 스윗 -->
        <div v-if='itemType==="LunaCrystalSweet"'>
            <ImageText :imgSrc='(new String()).toString()'>
                원더 블랙 사용 개수: {{ useCount * 2 }}개
            </ImageText>
        </div>
        <!-- 루나 크리스탈 드림 -->
        <div v-else>
            <span>
                <ImageText :imgSrc='(new String()).toString()'>
                    루나 스윗 사용 개수: {{ useCount }}개
                </ImageText>
                &nbsp;
                <ImageText :imgSrc='(new String()).toString()'>
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
</style>
