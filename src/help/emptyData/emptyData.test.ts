import { emptyData } from './emptyData';

test('emptyData 空值判斷', () => {
    expect(emptyData(undefined)).toBe(true);
});

test('emptyData 有值', () => {
    expect(emptyData(1)).toBe(false);
});

test('emptyData null 測試', () => {
    expect(emptyData(null)).toBe(true);
});

test('emptyData 空字符串測試', () => {
    expect(emptyData('')).toBe(true);
});

test('emptyData 非空字符串測試', () => {
    expect(emptyData('test')).toBe(false);
});

test('emptyData 空陣列測試', () => {
    expect(emptyData([])).toBe(true);
});

test('emptyData 非空陣列測試', () => {
    expect(emptyData([1, 2, 3])).toBe(false);
});

test('emptyData 空物件測試', () => {
    expect(emptyData({})).toBe(true);
});

test('emptyData 非空物件測試', () => {
    expect(emptyData({ a: 1 })).toBe(false);
});

test('emptyData 零值測試', () => {
    expect(emptyData(0)).toBe(false);
});

test('emptyData false 測試', () => {
    expect(emptyData(false)).toBe(false);
});
