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
});

test("help.recursiveDeepCopy 驗證深複製斷開引用", () => {
    const obj = {
        a: 1,
        nested: {
            b: 2
        }
    };
    const copy = recursiveDeepCopy(obj);
    
    // 修改原物件的嵌套屬性
    obj.nested.b = 999;
    
    // 驗證複製版本沒有被影響
    expect(copy.nested.b).toBe(2);
});

test("help.recursiveDeepCopy 陣列元素的深複製", () => {
    const obj = {
        items: [{ id: 1 }, { id: 2 }]
    };
    const copy = recursiveDeepCopy(obj);
    
    // 修改原陣列中的物件
    obj.items[0].id = 999;
    
    // 驗證複製版本沒有被影響
    expect(copy.items[0].id).toBe(1);
});

test("help.recursiveDeepCopy 複雜結構測試", () => {
    const obj = {
        level1: {
            level2: {
                level3: [
                    { name: "test", value: 123 },
                    { name: "test2", value: 456 }
                ]
            }
        }
    };
    const copy = recursiveDeepCopy(obj);
    
    // 驗證結構相同
    expect(copy).toStrictEqual(obj);
    
    // 修改原物件
    obj.level1.level2.level3[0].value = 999;
    
    // 驗證複製版本未受影響
    expect(copy.level1.level2.level3[0].value).toBe(123);
});