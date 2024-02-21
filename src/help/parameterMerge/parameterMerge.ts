import { gettype, recursiveDeepCopy } from "..";

/**
   * 兩個參數的合併(只能是物件或者陣列)
   * 如果是空值就回傳空物件
   * @param value1 
   * @param value2 
   * @returns 
   */
export function parameterMerge(value1?: any, value2?: any) {
    const type1 = gettype(value1);
    const type2 = gettype(value2);

    switch (true) {
        case (type1 === "undefined" || type1 === "null") && !!value2:
            return value2;
        case (type2 === "undefined" || type2 === "null") && !!value1:
            return value1;
        case type1 === "array" && type1 === type2:
            return [...value1, ...value2];
        case type1 === "object" && type1 === type2:
            return Object.assign(recursiveDeepCopy(value1), value2);
        default:
            return {};
    }
}