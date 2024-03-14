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
    if (!firstKey) return data;

    if (keys.length < 1) {
        data[firstKey] = value;
        return data;
    }

    data[firstKey] = data_set({}, keys.join("."), value);
    return data;
}