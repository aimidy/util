import { head } from "./head";

test("help.head 取值測試", () => {
    const value = [1, 2, 3];
    expect(head(value)).toBe(1);
});

test("help.head 空陣列測試", () => {
    expect(head([])).toBe(null);
});