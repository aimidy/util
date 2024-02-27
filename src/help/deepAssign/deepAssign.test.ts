import { deepAssign } from "./deepAssign";

test("help.deepAssign 測試", () => {
    const obj1 = {
        a: 1,
        b: 2,
        d: {
            a: 1,
            a1: {
                b: 2,
                a2: {
                    c: 1
                },
            }
        }
    }
    const obj2 = {
        b: 3,
        c: 1,
        d: {
            a: 2,
            a1: {
                c: 3,
                a2: {
                    c: 4
                }
            }
        }
    }
    expect(deepAssign(obj1, obj2)).toStrictEqual({
        a: 1,
        b: 3,
        c: 1,
        d: {
            a: 2,
            a1: {
                b: 2,
                c: 3,
                a2: {
                    c: 4
                }
            }
        }
    });
});


test("help.deepAssign undefined 測試", () => {

    const obj1 = undefined
    const obj2 = {
        b: 3,
        c: 1,

    }
    expect(deepAssign(obj1, obj2)).toStrictEqual({
        b: 3,
        c: 1,
    });
});