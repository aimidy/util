import { gettype } from "../gettype/gettype";

/**
 * 物件深度合併
 * @param target
 * @param sources
 * @returns
 */
export function deepAssign(...param: { [_: string]: any }[]) {
    let result = Object.assign({}, ...param);

    for (let item of param) {
        for (const [idx, val] of Object.entries<any>(item)) {
            if (gettype(val) === "object") {
                result[idx] = deepAssign(result[idx], val);
            }
        }
    }
    return result;
}
