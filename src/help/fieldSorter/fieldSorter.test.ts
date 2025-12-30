import { data1, data1Answer } from "./data";
import { fieldSorter } from "./fieldSorter";

test("fieldSorter 測試 文字排序", () => {
  expect(data1.sort(fieldSorter({ fields: [{ key: "a" }] }))).toStrictEqual(
    data1Answer
  );
});

test("fieldSorter 測試 多欄位排序", () => {
  const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 25 },
  ];
  const sorted = data.sort(
    fieldSorter({ fields: [{ key: "name" }, { key: "age" }] })
  );
  expect(sorted[0]).toStrictEqual({ name: "Alice", age: 25 });
  expect(sorted[2]).toStrictEqual({ name: "Bob", age: 25 });
});

test("fieldSorter 測試 反序排序", () => {
  const data = [{ id: 1 }, { id: 3 }, { id: 2 }];
  const sorted = data.sort(
    fieldSorter({ fields: [{ key: "id", isDesc: true }] })
  );
  expect(sorted).toStrictEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
});
