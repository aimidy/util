import { head } from "./head";

test("help.head 取值測試", () => {
    const value = [1, 2, 3];
    expect(head(value)).toBe(1);
});

test("help.head 空陣列測試", () => {
    expect(head([])).toBe(null);
});

test("help.head 字符串元素測試", () => {
    const value = ["a", "b", "c"];
    expect(head(value)).toBe("a");
});

test("help.head 物件元素測試", () => {
    const value = [{ id: 1 }, { id: 2 }];
    expect(head(value)).toStrictEqual({ id: 1 });
});

test("help.head 單元素測試", () => {
    expect(head([42])).toBe(42);
});