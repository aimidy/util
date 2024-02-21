/**
 * 動態設定多層物件的參數
 * @param data 被設定的物件
 * @param key 位置
 * @param value 參數
 * @returns 
 */
export function data_set(data: any, key: string, value: any) {
    const keys = key.split(".");
    const firstKey = keys.shift();
    if (!firstKey) return;

    if (!(firstKey in data))
        data[firstKey] = {};

    if (keys.length < 1) {
        data[firstKey] = value;
        return
    }
    data_set(data[firstKey], keys.join("."), value);
}