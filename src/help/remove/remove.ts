type TremoveValeu = string | number

/**
 * 移除陣列某一個位置的值
 * @param arr 陣列
 * @param item 要移除的值
 * @returns
 */
export function remove(arr: TremoveValeu[], item: TremoveValeu) {
    if (arr.length === 0) return [];

    const index = arr.indexOf(item);
    if (index === -1) return arr;

    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}