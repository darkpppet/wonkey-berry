import wonderberryItemsObj from '../../public/data/wonderberryItems.json';
import lunacrystalSweetItemsObj from '../../public/data/lunacrystalSweetItems.json';
import lunacrystalDreamItemsObj from '../../public/data/lunacrystalDreamItems.json';

export const wonderberryItems: readonly ItemData[] = wonderberryItemsObj as readonly ItemData[]; //원더베리 아이템들
export const lunacrystalSweetItems: readonly ItemData[] = lunacrystalSweetItemsObj as readonly ItemData[]; //루나 크리스탈 스윗 아이템들
export const lunacrystalDreamItems: readonly ItemData[] = lunacrystalDreamItemsObj as readonly ItemData[]; //루나 크리스탈 드림 아이템들

//아이템 정보 인터페이스
export interface ItemData {
    readonly imgSrc: string, //아이템 이미지 경로
    readonly name: string, //아이템 이름
    readonly grade?: //아이템 등급(원더베리 한정)
        "희귀 아이템" | "상급 아이템" | "노멀 아이템",
    readonly type: //아이템 종류
        "원더 블랙 펫" | "원더 일반 펫" | "일반 멀티 펫" | "펫 먹이" | "고농축 프리미엄 생명의 물" |
        "루나 스윗 펫" | "루나 드림 펫" | "루나 쁘띠 펫" | "루나 쁘띠 공용 펫장비",
    readonly prob: number //뽑을 확률
}

//아이템 이름들 타입(위습의원더베리, 루나크리스탈스윗, 루나크리스탈드림)
export type ItemName = "WispsWonderberry" | "LunaCrystalSweet" | "LunaCrystalDream";

//아이템 이름(string)으로 아이템 오브젝트(ItemData)들(ReadonlyArray<ItemData>) 리턴하는 함수
export const getData = (itemName: ItemName): readonly ItemData[] => {
    switch (itemName) {
        //위습의 원더베리
        case "WispsWonderberry":
            return wonderberryItems;
        
        //루나 크리스탈 스윗
        case "LunaCrystalSweet":
            return lunacrystalSweetItems;
        
        //루나 크리스탈 드림
        case "LunaCrystalDream":
            return lunacrystalDreamItems;
    }
}
