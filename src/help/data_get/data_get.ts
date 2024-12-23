import { deepCloneWithJson, gettype } from "..";

/**
 * 獲取資料
 * @param data 資料集 {key:value} 
 * @param key 資料對應的位置 app.column.name
 * @param defaultValue 如果取不到值要給予什麼參數，預設 null
 * @returns
 *
 * {a:[{b:a},{b:a}]}
 * a.b = [a,a]
 */
export function data_get<T = any>(data: { [key: string]: any } | any[] | null | undefined, key: string, defaultValue: any = null,): T {
    switch (gettype(data)) {
        case "object":
            const coypData = deepCloneWithJson(data);
            const findKey = Object.keys(coypData).find((k) => key.startsWith(k));
            if (!findKey) return defaultValue;

            key = findKey === key ? '' : key.replace(findKey + '.', '');
            if (key === '') return coypData[findKey];

            return data_get(coypData[findKey], key, defaultValue);

        case 'undefined':
        case 'null':
            return defaultValue;
        case 'array':
            return (data as any[]).map((value: any) => data_get(value, key, defaultValue)) as any;
        default:
            return data as any;
    }
}