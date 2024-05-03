/**
 * 取得區間的數值
 * @param start 開始時間
 * @param stop 結束時間
 * @param step 間隔
 * @returns 
 */
export function range(start: number, stop: number, step: number) {
    const range = { length: (stop - start) / step + 1 };

    return Array.from(range, (_, i) => start + (i * step));
};