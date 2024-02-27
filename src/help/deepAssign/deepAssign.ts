import { gettype } from "../gettype/gettype";

/**
 * 物件深度合併
 * @param target
 * @param sources
 * @returns
 */
export function deepAssign(...param: ({ [_: string]: any } | undefined)[]) {
    let temp: any[] = param.filter(v => gettype(v) === "object")
    if (temp.length < 1) return {};
    
    let result = Object.assign({}, ...temp);

    for (let item of temp) {
        for (const [idx, val] of Object.entries<any>(item)) {
            if (gettype(val) === "object") {
                result[idx] = deepAssign(result[idx], val);
            }
        }
    }
    return result;
}
