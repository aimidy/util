import { parameterMerge } from "./parameterMerge"

test("help.parameterMerge value1 空值測試", () => {
    const value2 = [1, 2, 3];
    const data = parameterMerge(null, value2);
    expect(data).toStrictEqual(value2);
});

test("help.parameterMerge value2 空值測試", () => {
    const value1 = [1, 2, 3];
    const data = parameterMerge(value1, null);
    expect(data).toStrictEqual(value1);
});


test("help.parameterMerge value1 value2 合併測試", () => {
    const value1 = { a: 1, b: 2, c: 3 };
    const value2 = { c: 4, d: 4, e: 5 }
    const data = parameterMerge(value1, value2);
    expect(data).toStrictEqual({
        a: 1,
        b: 2,
        c: 4,
        d: 4,
        e: 5,
    });
});