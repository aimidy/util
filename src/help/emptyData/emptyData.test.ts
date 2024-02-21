import { emptyData } from "./emptyData";

test("emptyData 空值判斷", () => {
    expect(emptyData(undefined)).toBe(true);
});

test("emptyData 有值", () => {
    expect(emptyData(1)).toBe(false);
});