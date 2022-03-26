<!--
    ResultView
    아이템 사용 결과를 나타내는 컴포넌트

    :itemType: 아이템 종류(string(ItemName))
    :itemsCount: 종류별로 뽑은 개수({ [key: string]: number })
-->

<template>
<div class='result-container'>
    <div v-for='(key, index) in Object.keys(groupedItems)' :key='index'>
        <TypeGroup :groupName='key' :groupItems='groupedItems[key]' :groupItemsCount='filterCount(key)' />
    </div>
</div>
</template>

<script setup lang='ts'>
import { defineProps, computed } from 'vue'
//.ts
import groupBy from '../assets/groupBy';
import { ItemData, ItemName, getData } from '../assets/itemsData'
//component
import TypeGroup from './TypeGroup.vue'
import ItemInfo from './ItemInfo.vue'

const props = defineProps<{
    itemType: ItemName, //아이템 종류
    itemsCount: { [key: string]: number }, //뽑은 아이템 개수; key: 아이템 이름, value: 개수
}>();

//아이템들을 type(원더베리의 경우 grade)으로 groupBy 한 것
const groupedItems = computed(() => groupBy(getData(props.itemType), i => i.grade ? i.grade : i.type));

//itemsCount를 groupBy된 group에 해당되는 것들만 뽑아내는 함수
const filterCount = (key: string): { [key: string]: number } => {
    const names = groupedItems.value[key].map((i: ItemData) => i.name);
    const result = Object.entries(props.itemsCount).filter(i => names.includes(i[0]));
    return Object.fromEntries(result);
};
</script>

<style scoped>
</style>
