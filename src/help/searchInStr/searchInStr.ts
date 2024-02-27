/**
 * 尋找字串內是否有符合的值，並移除後回傳結果
 * @param str 字串
 * @param key 要搜尋的文字
 * @returns [boolean,string]
 */
export function searchInStr(str: string, key: string): [boolean, string] {
    return str.indexOf(key) === -1 ? [false, str] : [true, str.replace(key, '')];
}