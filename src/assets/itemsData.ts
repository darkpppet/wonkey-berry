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
export function getData(itemName: ItemName): ReadonlyArray<ItemData> {
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

//원더베리 아이템들
export const wonderberryItems: ReadonlyArray<ItemData> = [{
    imgSrc: "https://w.namu.la/s/f42937738e5cb3453b4346116da8c61596ca5463839eb0f05a8a737c46172f15c7ba67d59aa2b9afa3f68103efbfb5bee394d05f5240f2e809af72d6396c923265f48398206a49fa9ee21317abaf204ced61a57e4edd1308e68aa08516cf6114",
    name: "아로",
    grade: "희귀 아이템",
    type: "원더 블랙 펫",
    prob: 0.0332
}, {
    imgSrc: "https://w.namu.la/s/b5ba54b82b3202ecf697be352f0dacbf22dc6e7e5d84987e451b004a6919ce745c9c5ae4fe648990177ecf7a6a97a8482cd3fdd1703d4922ebbd04160b33b328cfffc499a1f6d65e5abc9331c6bd3a461b42c9d44f73e4657252949900b47d5e",
    name: "폴라",
    grade: "희귀 아이템",
    type: "원더 블랙 펫",
    prob: 0.0332
}, {
    imgSrc: "https://w.namu.la/s/605ab982856e80c6d1a5b19f636db8644df3d4480550a5bf2d3dcd7020320e14e9b15959a74bbab323229834731a58aab7eb26468b9f28e748ef89d728b5a1ad0097b57cfdcdbcfa519ed476a1ed5044f9bf9890acebc861ce8393c65712fecf",
    name: "하링",
    grade: "희귀 아이템",
    type: "원더 블랙 펫",
    prob: 0.0332
}, {
    imgSrc: "https://w.namu.la/s/c49bd63bacda4b5150d567a0fdbeb563c503cf81da6dabd8b1fc25ee5d50a645bd8f46d9fb9040da2e82379dc67ad8307f552f5f7b110b49dc4d9fbc32b47ab7118fcb6b8735af70c67ab4443084990ef8553873dba816dd9574eccb2b8f49da",
    name: "맑음하트",
    grade: "상급 아이템",
    type: "원더 일반 펫",
    prob: 0.1200
}, {
    imgSrc: "https://w.namu.la/s/79e6d9b5ce5a9c3f6b0b1f526658ffe05af56408c75ab585851be5878841e580a7b3364d431b7cb202923621048fccef8a8f66e3f89eb30dcdb60387f057e04a0846bb16871d14efe3956d18c0931b6e9804239093c494db026b49974a2e9802",
    name: "빠직번개",
    grade: "상급 아이템",
    type: "원더 일반 펫",
    prob: 0.1200
}, {
    imgSrc: "https://w.namu.la/s/4aa50543d1e20d6c08682f15a1de26e464ac1147b0e0f7108a16db9459e3b1ba123763f737153bcf9c64e6fc01fb48d3a117502459cdea42e84528498ce952c557c550c7cfc5d8357fe6727f592ba58b28fb6433f9de8fc8288c168e850bf859",
    name: "눈물구름",
    grade: "상급 아이템",
    type: "원더 일반 펫",
    prob: 0.1200
}, {
    imgSrc: "https://w.namu.la/s/59b6557e0c00044405ac5643990681b8d5c7c4c4233e9b70a2d758ec0195c98fbd34aaa5b6317f8b6c2ea1351189d4aa01a52d19ec448fc74b81f5605831e21c018207d8a27ef591f9e724d69baad9f79e7947104404e12b3e4f12839259ebae",
    name: "설탕탕",
    grade: "상급 아이템",
    type: "일반 멀티 펫",
    prob: 0.1200
}, {
    imgSrc: "https://w.namu.la/s/02f35c6504a91e554f877cf7e7ec458e7f83cfdfd628d926c81284e901cd30cb09ae0f85630cb4569b501acc39cad978ed3f7099b61f867a3117a4cd30dcfbdf19d2b17261bebdcec3609425370990bd6c7d747ae61c0c3f8c3d090cdd244683",
    name: "초코코",
    grade: "상급 아이템",
    type: "일반 멀티 펫",
    prob: 0.1200
}, {
    imgSrc: "",
    name: "고농축 프리미엄 생명의 물",
    grade: "노멀 아이템",
    type: "고농축 프리미엄 생명의 물",
    prob: 0.1502
}, {
    imgSrc: "",
    name: "오가닉 원더 쿠키",
    grade: "노멀 아이템",
    type: "펫 먹이",
    prob: 0.1502
}];

//루나 크리스탈 스윗 아이템들
export const lunacrystalSweetItems: ReadonlyArray<ItemData> = [{
    imgSrc: "https://w.namu.la/s/a179a16ad5221b0507c19cbd9368b7b012753dcafb7b3d21f427b782c46d88a76950f258d2a3b8e4d5007892ce33096c79a6076da3a587e39fe01029fde3d3486dd3bd2460865d4700db3e67815729c595c4aa026a5f00612309995cd0936902",
    name: "눈냥냥",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/083b019d2b8e764f2a2db3adbeeefa4104dedf7588cfbddf86462106ee31fc25897c37af47149b7cdac31cfaf96a9e63c573f9d4b64ae63bb413890ab1cf9ae61c16f23921d4476c8b6ffacfef5775f67b1b392e84a81c59b232c3579dbadaf3",
    name: "토냥냥",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/9ebb2926c5cfab9566d5079553e409231686faca9edbd1627e584747d26f8ffcfd87e79eaea414a8c59ebc278a83782ae680d762373dbd5cceaab99d96e2c4a1d224e505f762e574dccc4ed0dc8c81a0741b65b3f533efd716e648e9c4c49046",
    name: "판냥냥",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/22667ce4d65b76ba2e3477759aed9dba0dafa63c49523fc953f3232d91a878f1a20d59793bddc4f9e5f211981f57d7cd87ca6fe3a341b46db9c590f883d20336628f0e7354ddd70b9920822fc263b7fbe3da7273f5cd174c3d4988031dc17363",
    name: "리틀 울프룻",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/35007f78f028b4b45d00e1ba94d9952d463924bd3ff596d7abae2d3883699ff969e00e88437b1739ccdd3be70bb0e2c704918e56af64d3667cd9ad2699d13e9f4b787f330d5a0eb80500004a60ed0eb694255e482c31fd312a4462bb96b0c290",
    name: "리틀 무토",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/89f9b88ea1de7fe838d8d11c0d0c08ec46bea9f3d4a7a34dcdd2b565f7e371e468109356ab39fd08c8a50de56759c8765f2f3afaeac39071106b6495ca0d6be57fe257572ac8befe142f86b91fc3298b5e9f08a6c4b0ffcd0cbca33885cb3f9e",
    name: "리틀 램나나",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/da66edae3b89e602b95e93bae5a0a6ca736581b063c16677a9d68ee6a61c244f8d8436319258587dbce4a2f92fe0ec07bc9aadc287cf27707b7f232be168054d0a83dbd1f594d5f05aaf2d3406bf0e79ad879e31cc4e560e333cd74b3ee65810",
    name: "피치버블",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/1790faee606168ad318f90d33be2aace813549089cc9a9003bcad663719bd5b3bd54613da346230ce3d989cf4f30c7fdd339fdca0fcb1ea2970e5072e9ddc55b7adc76af8245216c7818c5158ba847497eb4db9cb4db828525f45913dc9b7f43",
    name: "리프버블",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/cc556fce1d135ca2ff3a0bfc0ae2e131d0508b664d0f526838da78bde53dd911cbe18e9930a9b09505c89b49ef35574a509a5ec698421caf232ffb2c1775ac233b7859148eda6ab96fbf00bfb3097fb9afcda6f975fb29ff4e289772eb3033e4",
    name: "민트버블",
    type: "루나 스윗 펫",
    prob: 0.0960
}, {
    imgSrc: "https://w.namu.la/s/6342847ec42236e4792d2fc0f418d8d649b5767af2779b6f7fd82e5a841063fbcfd575ce738f6b57301d29c85fc2f5f8e43b0f118d45e86786308595df9e4ebc60a9a45087dd810bd32e90290435234eddd30561b8c0905ca93540cd28cd917d",
    name: "토트",
    type: "루나 쁘띠 펫",
    prob: 0.0388
}, {
    imgSrc: "https://w.namu.la/s/112450d374544daa88a12922258d32bbed154c6d4488d4eaa3bf9436cc1de135f2d95db60abc9d24a05a19d9aee1bed08ce1d6937097c00a511a0ffd1c76e65f4c87d5d46880a5513204b5a46e33ff4111f417a4bd8b8412945f73b97e859008",
    name: "벨라",
    type: "루나 쁘띠 펫",
    prob: 0.0388
}, {
    imgSrc: "https://w.namu.la/s/67d70b318774f039a37c3bba7bf684ef4a973c8633f75c6cff4bd1184d46ab08a009173778d4227c4d0fc48da99582d4842390617c6ef5f1befa76bac6381a789d6a20171fb65c5eceff665a4d18bb34ea85f756440dd1966b16956880d3b706",
    name: "쁘띠 데스",
    type: "루나 쁘띠 펫",
    prob: 0.0388
}, {
    imgSrc: "",
    name: "루나 크리스탈 키",
    type: "루나 쁘띠 공용 펫장비",
    prob: 0.0196
}];

//루나 크리스탈 드림 아이템들
export const lunacrystalDreamItems: ReadonlyArray<ItemData> = [{
    imgSrc: "https://w.namu.la/s/a179a16ad5221b0507c19cbd9368b7b012753dcafb7b3d21f427b782c46d88a76950f258d2a3b8e4d5007892ce33096c79a6076da3a587e39fe01029fde3d3486dd3bd2460865d4700db3e67815729c595c4aa026a5f00612309995cd0936902",
    name: "눈냥냥",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/083b019d2b8e764f2a2db3adbeeefa4104dedf7588cfbddf86462106ee31fc25897c37af47149b7cdac31cfaf96a9e63c573f9d4b64ae63bb413890ab1cf9ae61c16f23921d4476c8b6ffacfef5775f67b1b392e84a81c59b232c3579dbadaf3",
    name: "토냥냥",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/9ebb2926c5cfab9566d5079553e409231686faca9edbd1627e584747d26f8ffcfd87e79eaea414a8c59ebc278a83782ae680d762373dbd5cceaab99d96e2c4a1d224e505f762e574dccc4ed0dc8c81a0741b65b3f533efd716e648e9c4c49046",
    name: "판냥냥",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/22667ce4d65b76ba2e3477759aed9dba0dafa63c49523fc953f3232d91a878f1a20d59793bddc4f9e5f211981f57d7cd87ca6fe3a341b46db9c590f883d20336628f0e7354ddd70b9920822fc263b7fbe3da7273f5cd174c3d4988031dc17363",
    name: "리틀 울프룻",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/35007f78f028b4b45d00e1ba94d9952d463924bd3ff596d7abae2d3883699ff969e00e88437b1739ccdd3be70bb0e2c704918e56af64d3667cd9ad2699d13e9f4b787f330d5a0eb80500004a60ed0eb694255e482c31fd312a4462bb96b0c290",
    name: "리틀 무토",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/89f9b88ea1de7fe838d8d11c0d0c08ec46bea9f3d4a7a34dcdd2b565f7e371e468109356ab39fd08c8a50de56759c8765f2f3afaeac39071106b6495ca0d6be57fe257572ac8befe142f86b91fc3298b5e9f08a6c4b0ffcd0cbca33885cb3f9e",
    name: "리틀 램나나",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/da66edae3b89e602b95e93bae5a0a6ca736581b063c16677a9d68ee6a61c244f8d8436319258587dbce4a2f92fe0ec07bc9aadc287cf27707b7f232be168054d0a83dbd1f594d5f05aaf2d3406bf0e79ad879e31cc4e560e333cd74b3ee65810",
    name: "피치버블",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/1790faee606168ad318f90d33be2aace813549089cc9a9003bcad663719bd5b3bd54613da346230ce3d989cf4f30c7fdd339fdca0fcb1ea2970e5072e9ddc55b7adc76af8245216c7818c5158ba847497eb4db9cb4db828525f45913dc9b7f43",
    name: "리프버블",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/cc556fce1d135ca2ff3a0bfc0ae2e131d0508b664d0f526838da78bde53dd911cbe18e9930a9b09505c89b49ef35574a509a5ec698421caf232ffb2c1775ac233b7859148eda6ab96fbf00bfb3097fb9afcda6f975fb29ff4e289772eb3033e4",
    name: "민트버블",
    type: "루나 드림 펫",
    prob: 0.0840
}, {
    imgSrc: "https://w.namu.la/s/6342847ec42236e4792d2fc0f418d8d649b5767af2779b6f7fd82e5a841063fbcfd575ce738f6b57301d29c85fc2f5f8e43b0f118d45e86786308595df9e4ebc60a9a45087dd810bd32e90290435234eddd30561b8c0905ca93540cd28cd917d",
    name: "토트",
    type: "루나 쁘띠 펫",
    prob: 0.0680
}, {
    imgSrc: "https://w.namu.la/s/112450d374544daa88a12922258d32bbed154c6d4488d4eaa3bf9436cc1de135f2d95db60abc9d24a05a19d9aee1bed08ce1d6937097c00a511a0ffd1c76e65f4c87d5d46880a5513204b5a46e33ff4111f417a4bd8b8412945f73b97e859008",
    name: "벨라",
    type: "루나 쁘띠 펫",
    prob: 0.0680
}, {
    imgSrc: "https://w.namu.la/s/67d70b318774f039a37c3bba7bf684ef4a973c8633f75c6cff4bd1184d46ab08a009173778d4227c4d0fc48da99582d4842390617c6ef5f1befa76bac6381a789d6a20171fb65c5eceff665a4d18bb34ea85f756440dd1966b16956880d3b706",
    name: "쁘띠 데스",
    type: "루나 쁘띠 펫",
    prob: 0.0680
}, {
    imgSrc: "",
    name: "루나 크리스탈 키",
    type: "루나 쁘띠 공용 펫장비",
    prob: 0.0400
}];
