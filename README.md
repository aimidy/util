# @aimidy/util ⚡

一個實用的 TypeScript 工具函數庫，提供常用的資料處理、物件操作、字串轉換等功能。✨

## 📦 安裝

```bash
npm install @aimidy/util
```

## 🚀 使用方式

```typescript
import { data_get, deepAssign, strToHump } from '@aimidy/util';
```

## 📚 API 文件

### 🗄️ 資料存取

#### `data_get<T>(data, key, defaultValue?)`

從巢狀物件或陣列中安全地獲取資料。

**參數：**

- `data`: 資料集 (物件、陣列或 null/undefined)
- `key`: 資料路徑，使用點號分隔 (例如：`'app.column.name'`)
- `defaultValue`: 取不到值時的預設值 (預設為 `null`)

**範例：**

```typescript
const data = { a: [{ b: 'value1' }, { b: 'value2' }] };
data_get(data, 'a.b'); // ['value1', 'value2']
```

#### `data_set(data, key, value)`

動態設定多層物件的參數。

**參數：**

- `data`: 被設定的物件
- `key`: 位置 (使用點號分隔)
- `value`: 要設定的值

**範例：**

```typescript
const obj = {};
data_set(obj, 'user.profile.name', 'John');
// { user: { profile: { name: 'John' } } }
```

### 🔧 物件操作

#### `deepAssign(...objects)`

深度合併多個物件。

**範例：**

```typescript
const obj1 = { a: { b: 1 } };
const obj2 = { a: { c: 2 } };
deepAssign(obj1, obj2); // { a: { b: 1, c: 2 } }
```

#### `recursiveDeepCopy<T>(obj)`

透過遞迴深度複製物件或陣列。

**範例：**

```typescript
const original = { a: [1, 2], b: { c: 3 } };
const copy = recursiveDeepCopy(original);
```

#### `deepCloneWithJson<T>(obj)`

透過 JSON 序列化/反序列化複製物件（速度較快但有限制）。

**範例：**

```typescript
const clone = deepCloneWithJson({ a: 1, b: { c: 2 } });
```

#### `parameterMerge(value1?, value2?)`

合併兩個參數（物件或陣列）。

**範例：**

```typescript
parameterMerge([1, 2], [3, 4]); // [1, 2, 3, 4]
parameterMerge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
```

### 🔤 字串轉換

#### `convertCase(input, to)`

將字串在不同命名風格間轉換。

**參數：**

- `input`: 輸入字串
- `to`: 目標格式 (`'pascal'` | `'camel'` | `'snake'` | `'kebab'`)

**範例：**

```typescript
convertCase('user_name', 'camel'); // 'userName'
convertCase('UserName', 'snake'); // 'user_name'
convertCase('user-name', 'pascal'); // 'UserName'
```

#### `strToHump(str)`

底線轉駝峰命名。

**範例：**

```typescript
strToHump('user_name'); // 'userName'
strToHump('_user_name'); // 'userName'
```

#### `strToConvert(str, convert?)`

駝峰轉小寫+分隔符（預設為底線）。

**參數：**

- `str`: 輸入字串
- `convert`: 分隔符號 (預設為 `'_'`)

**範例：**

```typescript
strToConvert('userName'); // 'user_name'
strToConvert('userName', '-'); // 'user-name'
```

### 📋 陣列操作

#### `head<T>(arr)`

回傳陣列的第一個值或 null。

**範例：**

```typescript
head([1, 2, 3]); // 1
head([]); // null
```

#### `remove(arr, item)`

移除陣列中指定的值。

**參數：**

- `arr`: 字串或數字陣列
- `item`: 要移除的值

**範例：**

```typescript
remove([1, 2, 3, 2], 2); // [1, 3, 2]
```

#### `fieldSorter(sort)`

多欄位排序函數。

**參數：**

- `sort.isDesc`: 是否降冪排序
- `sort.fields`: 欄位設定陣列
  - `key`: 欄位名稱
  - `isNumber`: 是否為數字
  - `isDesc`: 該欄位是否降冪

**範例：**

```typescript
const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
];
data.sort(
  fieldSorter({
    fields: [{ key: 'age', isNumber: true, isDesc: true }],
  }),
);
```

#### `range(start, stop, step)`

取得數值區間的陣列。

**範例：**

```typescript
range(1, 5, 1); // [1, 2, 3, 4, 5]
range(0, 10, 2); // [0, 2, 4, 6, 8, 10]
```

### 🛠️ 工具函數

#### `gettype(obj)`

回傳物件的精確型態。

**回傳值：** `'array'` | `'date'` | `'null'` | `'undefined'` | `'object'` | `'string'` | `'number'` | `'boolean'` 等

**範例：**

```typescript
gettype([]); // 'array'
gettype(null); // 'null'
gettype(new Date()); // 'date'
```

#### `emptyData(data)`

判斷資料是否為空值（`undefined` 或 `null`）。

**範例：**

```typescript
emptyData(null); // true
emptyData(undefined); // true
emptyData(0); // false
emptyData(''); // false
```

#### `searchInStr(str, key)`

尋找字串內是否有符合的值，並移除後回傳結果。

**回傳值：** `[boolean, string]`

**範例：**

```typescript
searchInStr('hello world', 'world'); // [true, 'hello ']
searchInStr('hello', 'bye'); // [false, 'hello']
```

## 💻 開發

```bash
# 執行測試
npm test

# 建置專案
npm run build

# 發布套件
npm run push
```

## 📄 授權

ISC

## 👤 作者

aimidy

## 🔗 Repository

<https://github.com/aimidy/util>
