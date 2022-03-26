<!--
    App
    페이지의 제일 메인
-->

<template>
<div id='main-container'>
    <!-- 타이틀 -->
    <h1 id='main-title'>원기베리</h1>
    <!-- 아이템 선택(radio): 원더베리, 루나크리스탈스윗, 루나크리스탈드림 -->
    <ItemSelector @updateValue="changeSelected" />
    <!-- 사용한 재화량 --> 
    <MoneyResultView :itemType="selectedItem" :useCount="clickCount" />
    <!-- 뽑기 결과 -->
    <ResultView :itemType="selectedItem" :itemsCount="itemsCount" />
    <!-- 뽑는 버튼 -->
    <button id='using-button' @click='gacha'>사용</button>
</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
//.ts
import { ItemName, getData } from './assets/itemsData'; //아이템 데이터
import choose from './assets/choose'; //아이템 뽑기 함수
//component
import ItemSelector from './components/ItemSelector.vue';
import MoneyResultView from './components/MoneyResultView.vue';
import ResultView from './components/ResultView.vue';

//선택 아이템 이름
const selectedItem = ref('WispsWonderberry' as ItemName);
//버튼 누른 횟수(사용 횟수)
const clickCount = ref(0);
//아이템별로 뽑은 횟수; key: 아이템 이름
const itemsCount = ref(getData('WispsWonderberry').reduce((result, value) => { result[value.name] = 0; return result; }, {} as { [k: string]: number }));

//라디오버튼 바뀌면 실행되는 메소드; selectedItem 변경
const changeSelected = (value: ItemName): void => {
    selectedItem.value = value;
    clickCount.value = 0;
    itemsCount.value = getData(selectedItem.value).reduce((result, value) => { result[value.name] = 0; return result; }, {} as { [k: string]: number })
};

//버튼 누르면 실행되는 메소드; clickCount 증가 및 확률에 따라 랜덤으로 뽑은 itemsCount["key"] 값 증가
const gacha = (): void => {
    clickCount.value++;
    itemsCount.value[choose(getData(selectedItem.value), Math.random())]++;
};
</script>

<style scoped>
#main-title {
    margin: 10px;
    font-size: 40px;
}

#using-button {
    width: 160px;
    height: 75px;
    margin-bottom: 25px;
    border-radius: 5px;
    font-family: 'Jua', sans-serif;
    font-size: 30px;
}
</style>
