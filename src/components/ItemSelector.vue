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
        <ImageText :imgSrc='"https://w.namu.la/s/21591ef8728b01c5e78ab0de23f5a3e588818baf14b3b28e2308986c534de40a2248c1587411b27487c464bee3a042c70bffee6101efaad9c45639bc8acb1757fafc27d94168c1284de2254c246b581a5cddf6996cb929a35ec2343c87ddf2da"'>
            위습의 원더베리
        </ImageText>
    </label>
    &nbsp;
    <!-- 루나 크리스탈 스윗 -->
    <label>
        <input type='radio' class='select-radio' name='item-selector-radio' value='LunaCrystalSweet' @change='changeItem' />
        <ImageText :imgSrc='"https://w.namu.la/s/55a49812241f837105c7dd9e9ad3fae8dc6e5df939e2f28ec6c3c85ae1a93f52b15258d89e3c988a340c2d6745b26e4003f70bd917ddb784e6d63711dc9e371622b8e98971f4a4795f6768cfd002d80fb7448046dda0bd3ed7670f9f5636b47c"'>
            루나 크리스탈 스윗
        </ImageText>
    </label>
    &nbsp;
    <!-- 루나 크리스탈 드림 -->
    <label>
        <input type='radio' class='select-radio' name='item-selector-radio' value='LunaCrystalDream' @change='changeItem' />
        <ImageText :imgSrc='"https://w.namu.la/s/55a49812241f837105c7dd9e9ad3fae8dc6e5df939e2f28ec6c3c85ae1a93f52b15258d89e3c988a340c2d6745b26e4003f70bd917ddb784e6d63711dc9e371622b8e98971f4a4795f6768cfd002d80fb7448046dda0bd3ed7670f9f5636b47c"'>
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
