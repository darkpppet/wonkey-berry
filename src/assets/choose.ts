import { ItemData } from './itemsData'

//아이템들 배열과 랜덤값 넣으면 확률에 맞춰서 아이템 이름 리턴하는 함수
export default function choose(items: ReadonlyArray<ItemData>, rand: number, start: number = 0, index: number = 0): string {
    if (rand >= start && rand < start + items[index].prob) {
        return items[index].name;
    } else {
        return choose(items, rand, start + items[index].prob, index + 1);
    }
}
