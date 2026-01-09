/**
 * 替換路徑中的參數佔位符
 * @param str 路徑字串，例如 "/abc/:id" 或 "/abc/{id}"
 * @param data 參數物件，例如 { id: "1" }
 * @param prefix 佔位符前綴，預設為 ":"，也可以使用 "{}" 或其他字符
 * @returns 替換後的路徑字串
 */
export function replacePathParams(
    str: string,
    data: Record<string, string | number>,
    prefix: string = ':',
): string {
    if (!str) return str;
    if (!data || typeof data !== 'object') return str;

    // 處理 {} 包裹的情況
    if (prefix === '{}') {
        return str.replace(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g, (match, paramName) => {
            const value = data[paramName];
            return value !== undefined && value !== null ? String(value) : match;
        });
    }

    // 處理其他前綴字符（如 :, $, # 等）
    const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedPrefix}([a-zA-Z_][a-zA-Z0-9_]*)`, 'g');

    return str.replace(regex, (match, paramName) => {
        const value = data[paramName];
        return value !== undefined && value !== null ? String(value) : match;
    });
}
