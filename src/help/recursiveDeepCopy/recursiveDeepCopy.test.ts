import { recursiveDeepCopy } from "./recursiveDeepCopy";


test("help.recursiveDeepCopy 測試", () => {
    const obj = {
        a: 1,
        b: 2,
        c: {
            d: 3
        },
        e: [1, 2, 3]
    };
    const copy = recursiveDeepCopy(obj);
    expect(copy).toStrictEqual(obj);
})