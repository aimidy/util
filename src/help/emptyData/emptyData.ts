/**
 * 判斷資料是否為空值
 * @param data
 * @returns
 */
export function emptyData(data: any) {
    if (data === undefined || data === null) {
        return true;
    }

    if (typeof data === 'string') {
        return data === '';
    }

    if (Array.isArray(data)) {
        return data.length === 0;
    }

    if (typeof data === 'object') {
        return Object.keys(data).length === 0;
    }

    return false;
}
