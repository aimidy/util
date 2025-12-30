/**
 * 判斷資料是否為空值
 * @param data
 * @returns
 */
export function emptyData(data: any) {
    const isEmpty: Record<string, () => boolean> = {
        undefined: () => true,
        null: () => true,
        string: () => data === '',
        array: () => data.length === 0,
        object: () => Object.keys(data).length === 0,
    };

    const type = Array.isArray(data) ? 'array' : typeof data;
    return isEmpty[type]?.() ?? false;
}
