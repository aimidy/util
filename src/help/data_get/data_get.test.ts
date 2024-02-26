import { data_get } from "./data_get";

test("help.data_get 測試", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(data_get(obj, "a.b.c")).toBe(1);
});

test("help.data_get null 測試", () => {
    expect(data_get(null, "a.b.c")).toBe(null);
});

test("help.data_get array 測試 1", () => {
    const array = [{ a: 1 }, { a: 2 }, { a: 3 }]
    expect(data_get(array, "a")).toStrictEqual([1, 2, 3]);
});

test("help.data_get array 測試 2", () => {
    const array = [{ a: 1 }, { b: 2 }, { a: 3 }]
    expect(data_get(array, "a")).toStrictEqual([1, null, 3]);
});

test("help.data_get object 測試 1", () => {
    const array = {
        a: 1,
        b: 2,
        c: {
            d: [1, 2, 3, 4]
        }
    }
    expect(data_get(array, "c.d")).toStrictEqual([1, 2, 3, 4]);
});