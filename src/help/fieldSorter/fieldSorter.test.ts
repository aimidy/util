import { data1, data1Answer } from "./data";
import { fieldSorter } from "./fieldSorter"

test("fieldSorter 測試 文字排序", () => {
    expect(data1.sort(fieldSorter({ fields: [{ key: "a" }] })))
        .toStrictEqual(data1Answer);
})