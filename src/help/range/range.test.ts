import { range } from "./range";

test("range 測試", () => {
    const initNumber = 2024;
    expect(range(initNumber, initNumber - 2, -1)).toStrictEqual([2024, 2023, 2022])
});