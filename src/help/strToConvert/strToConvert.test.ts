import { strToConvert } from "./strToConvert";

test("help.strToConvert 測試", () => {
    expect(strToConvert("StringValue")).toBe("string_value");
});

test("help.strToConvert 測試", () => {
    expect(strToConvert("StringValue",'.')).toBe("string.value");
});