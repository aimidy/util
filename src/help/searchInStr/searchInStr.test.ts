import { searchInStr } from "./searchInStr";

test("help.searchInStr 測試", () => {
    expect(searchInStr('abscse', 'a')).toStrictEqual([true, 'bscse']);
});


test("help.searchInStr 測試", () => {
    expect(searchInStr('abcd', 'e')).toStrictEqual([false, 'abcd']);
});