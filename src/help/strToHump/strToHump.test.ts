import { strToHump } from "./strToHump";

test("help.strToHump 測試", () => {
    expect(strToHump("value_string")).toBe("valueString");
});


test("help.strToHump 前置底線測試", () => {
    expect(strToHump("_value_string")).toBe("valueString");
});