<!--
    ItemSelector
    라디오버튼으로 아이템의 종류 선택하는 컴포넌트
    선택한 것을 string(ItemName)으로 App에 emit함

    @updateValue: emit 받는 메소드 연결
-->

<template>
<div id='selector-container'>
    <!-- 위습의 원더베리 -->
    <label>
        <input type='radio' class='select-radio' name='item-selector-radio' value='WispsWonderberry' @change='changeItem' checked />
        <ImageText :imgSrc='"/images/위습의원더베리.png"'>
            위습의 원더베리
        </ImageText>
    </label>
    &nbsp;
    <!-- 루나 크리스탈 스윗 -->
    <label>
        <input type='radio' class='select-radio' name='item-selector-radio' value='LunaCrystalSweet' @change='changeItem' />
        <ImageText :imgSrc='"/images/루나크리스탈.png"'>
            루나 크리스탈 스윗
        </ImageText>
    </label>
    &nbsp;
    <!-- 루나 크리스탈 드림 -->
    <label>
        <input type='radio' class='select-radio' name='item-selector-radio' value='LunaCrystalDream' @change='changeItem' />
        <ImageText :imgSrc='"/images/루나크리스탈.png"'>
            루나 크리스탈 드림
        </ImageText>
    </label>
</div>
</template>

<script setup lang='ts'>
//.ts
import { ItemName } from '../assets/itemsData'
//component
import ImageText from './ImageText.vue'

const emit = defineEmits<{
    (e: 'updateValue', value: ItemName): void,
}>();

//라디오버튼 바뀌면 실행되는 메소드; 부모 컴포넌트로 바뀐 라디오버튼의 value값 emit함(updateValue 속성)
const changeItem = (event: Event): void => {
    emit('updateValue', (event.target as HTMLInputElement).value as ItemName);
};
</script>

<style scoped>
#selector-container {
    margin: 10px;
}

.select-radio {
    margin: 5px;
}
</style>
