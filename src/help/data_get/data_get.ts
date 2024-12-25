import { deepCloneWithJson, gettype } from "..";

/**
 * 獲取資料  
 * {a:[{b:a},{b:a}]}  
 * a.b = [a,a]
 * @param data 資料集 {key:value} 
 * @param key 資料對應的位置 app.column.name
 * @param defaultValue 如果取不到值要給予什麼參數，預設 null
 * @returns 
 * @default null
 */
export function data_get<T = any>(data: { [key: string]: any } | any[] | null | undefined, key: string, defaultValue: any = null,): T {
    switch (gettype(data)) {
        case "object":
            const copyData = deepCloneWithJson(data);
            const findKeys = Object.keys(copyData).filter((k) => key.startsWith(k));
            if (findKeys.length < 1) return defaultValue;

            const findKey = findKeys.length === 1 ? findKeys[0] : findOnlyKey(findKeys, key);
            if (findKey === null) return defaultValue;

            key = findKey === key ? '' : key.replace(findKey + '.', '');
            if (key === '') return copyData[findKey];

            return data_get(copyData[findKey], key, defaultValue);

        case 'undefined':
        case 'null':
            return defaultValue;
        case 'array':
            return (data as any[]).map((value: any) => data_get(value, key, defaultValue)) as any;
        default:
            return data as any;
    }
}

/**
 * 當有多個key時，找出唯一的key
 * @param objKeys 
 * @param key 
 * @returns 
 */
function findOnlyKey(objKeys: string[], key: string): string | null {
    const keys = key.split('.');
    return objKeys.find(objKey => {
        const keyParts = objKey.split('.');
        return keys.every((k, index) => k === keyParts[index] || keyParts[index] === keys.slice(0, index + 1).join('.'));
    }) || null;
}