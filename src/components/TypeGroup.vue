<!--
    TypeGroup
    아이템들을 그룹지어 나타내는 컴포넌트

    :groupName: 그룹 이름(string)
    :groupItems: 아이템들(object(ItemData)[])
    :groupItemsCount: 아이템들 개수({ [key: string]: number })
-->

<template>
<div>
    <h2 class='type-name'>{{ groupName }}: 총 {{ groupCount }}개</h2>
    <div class='items-container'>
        <div v-for="(item, index) in groupItems" :key="index">
            <ItemInfo :item="item" :count="groupItemsCount[item.name]" />
        </div>
    </div>
</div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
//.ts
import { ItemData } from '../assets/itemsData'
//component
import ItemInfo from './ItemInfo.vue'

const props = defineProps<{
    groupName: string, //type(혹은 grade) 이름
    groupItems: ItemData[], //아이템들
    groupItemsCount: { [key: string]: number }, //아이템들 각각의 개수; key: 아이템 이름, value: 개수
}>();

//아이템들의 개수 총합
const groupCount = computed(() => Object.entries(props.groupItemsCount).map(i => i[1]).reduce((a, b) => a + b));
</script>

<style scoped>
.type-name {
    margin: 5px;
    font-size: 30px;
}

.items-container {
    display: flex;
    justify-content: center;
}
</style>
