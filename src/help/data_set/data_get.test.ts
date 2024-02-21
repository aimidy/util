import { data_set } from "./data_set";


test("help.data_set 測試", () => {
    const obj = { a: 1 };
    data_set(obj, "c", 2);
    data_set(obj, "d.e", 3);
    expect(obj).toStrictEqual({ a: 1, c: 2, d: { e: 3 } });
});