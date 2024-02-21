/**
 * 回傳物體的型態
 * @param obj 
 * @returns 
 */
export function gettype<T = any>(obj: T) {
    switch (true) {
        case obj instanceof Array:
            return 'array';
        case obj instanceof Date:
            return 'date';
        case obj === null:
            return 'null';
        default:
            return typeof obj;
    }
}