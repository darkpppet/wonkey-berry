//그룹바이 함수
export default function groupBy<T>(list: ReadonlyArray<T>, getKey: (i: T) => string): { [key: string]: T[] } {
    const templist: Array<T> = [...list];
    return templist.reduce((previous, currentItem) => {
        const group = getKey(currentItem);
        if (!previous[group]) {
            previous[group] = [];
        }
        previous[group].push(currentItem);
        return previous;
    }, {} as { [key: string]: T[] })
}
