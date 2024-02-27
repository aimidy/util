import { remove } from "./remove";

test("help.remove 測試", () => {
    const value = [1, 2, 3];
    expect(remove(value, 1)).toStrictEqual([2, 3]);
});

test("remove 找不到測試", () => {
    expect(remove([1, 2, 3], 4)).toStrictEqual([1, 2, 3]);
});