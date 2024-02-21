/**
 * 判斷資料是否為空值
 * @param data 
 * @returns 
 */
export function emptyData(data: any) {
    return typeof data === "undefined" || data === null
}