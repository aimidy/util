import { gettype } from "..";

/**
 * 回傳物件的第一個值或者空值
 * @param arr
 * @returns
 */
export function head<T = any>(arr: Array<T>): T | null {
    if (gettype(arr) !== 'array') return null;
    return arr.length > 0 ? arr[0] : null;
}


