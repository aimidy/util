import { range } from "./range";

test("range 測試", () => {
    const initNumber = 2024;
    expect(range(initNumber, initNumber - 2, -1)).toStrictEqual([2024, 2023, 2022])
});

test("range 正向遞增測試", () => {
    expect(range(1, 5, 1)).toStrictEqual([1, 2, 3, 4, 5]);
});

test("range 步進為2測試", () => {
    expect(range(0, 10, 2)).toStrictEqual([0, 2, 4, 6, 8, 10]);
});

test("range 負數範圍測試", () => {
    expect(range(-5, -1, 1)).toStrictEqual([-5, -4, -3, -2, -1]);
});

test("range 單一元素測試", () => {
    expect(range(5, 5, 1)).toStrictEqual([5]);
});

test("range 負向遞減測試", () => {
    expect(range(10, 5, -1)).toStrictEqual([10, 9, 8, 7, 6, 5]);
});