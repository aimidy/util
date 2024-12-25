import { data_get } from "./data_get";

test("help.data_get 基礎", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(data_get(obj, "a.b.c")).toBe(1);
});

test("help.data_get null ", () => {
    expect(data_get(null, "a.b.c")).toBe(null);
});

test("help.data_get array 基礎", () => {
    const array = [{ a: 1 }, { a: 2 }, { a: 3 }]
    expect(data_get(array, "a")).toStrictEqual([1, 2, 3]);
});

test("help.data_get array 一個參數 key 不一樣", () => {
    const array = [{ a: 1 }, { b: 2 }, { a: 3 }]
    expect(data_get(array, "a")).toStrictEqual([1, null, 3]);
});

test("help.data_get object 基礎", () => {
    const array = {
        a: 1,
        b: 2,
        c: {
            d: [1, 2, 3, 4]
        }
    }
    expect(data_get(array, "c.d")).toStrictEqual([1, 2, 3, 4]);
});

test("help.data_get object 複合式key", () => {
    const array = {
        a: 1,
        b: 2,
        'c.d': {
            'd.f': [1, 2, 3, 4]
        }
    }
    expect(data_get(array, "c.d.d.f")).toStrictEqual([1, 2, 3, 4]);
});


test("help.data_get object 相似key", () => {
    const array = {
        app: {
            status: 1,
            status2: 2,
            'status.a': 3
        },
    }

    expect(data_get(array, "app.status.a")).toBe(3);
});