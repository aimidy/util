import { deepCloneWithJson, gettype } from "..";

/**
 * 獲取資料
 * @param data 資料集{key:value}
 * @param key 資料對應的位置 app.column.name
 * @param defaultValue 如果取不到值要給予什麼參數，預設 null
 * @returns
 *
 * {a:[{b:a},{b:a}]}
 * a.b = [a,a]
 */
export function data_get(data: any, key: string, defaultValue: any = null,): any {
    switch (gettype(data)) {
        case "object":
            const coypData = deepCloneWithJson(data);
            const keys = key.split('.');
            let firstKey = keys.shift();
            if (!firstKey) return defaultValue;
            if (!(firstKey in coypData)) return defaultValue;

            let rep = coypData[firstKey];
            if (keys.length > 0)
                rep = data_get(rep, keys.join('.'), defaultValue);

            return rep ?? defaultValue;
        case 'undefined':
        case 'null':
            return defaultValue;
        case 'array':
            return (data as any[]).map((value: any) => data_get(value, key, defaultValue)) as any;
        default:
            return data;
    }
}