import { convertCase, convertAllCases } from "./convertCase";

describe("convertCase", () => {
  describe("convertCase function", () => {
    describe("to snake_case", () => {
      it("should convert PascalCase to snake_case", () => {
        expect(convertCase("PascalCase", "snake")).toBe("pascal_case");
      });

      it("should convert camelCase to snake_case", () => {
        expect(convertCase("camelCase", "snake")).toBe("camel_case");
      });

      it("should convert kebab-case to snake_case", () => {
        expect(convertCase("kebab-case", "snake")).toBe("kebab_case");
      });

      it("should handle snake_case (unchanged)", () => {
        expect(convertCase("snake_case", "snake")).toBe("snake_case");
      });

      it("should handle consecutive uppercase letters", () => {
        expect(convertCase("JSONDataAPI", "snake")).toBe("json_data_api");
      });

      it("should handle numbers", () => {
        expect(convertCase("API2Version", "snake")).toBe("api_2_version");
      });
    });

    describe("to kebab-case", () => {
      it("should convert PascalCase to kebab-case", () => {
        expect(convertCase("PascalCase", "kebab")).toBe("pascal-case");
      });

      it("should convert camelCase to kebab-case", () => {
        expect(convertCase("camelCase", "kebab")).toBe("camel-case");
      });

      it("should convert snake_case to kebab-case", () => {
        expect(convertCase("snake_case", "kebab")).toBe("snake-case");
      });

      it("should handle mixed separators", () => {
        expect(convertCase("mixed_case-name", "kebab")).toBe("mixed-case-name");
      });
    });

    describe("to camelCase", () => {
      it("should convert PascalCase to camelCase", () => {
        expect(convertCase("PascalCase", "camel")).toBe("pascalCase");
      });

      it("should convert snake_case to camelCase", () => {
        expect(convertCase("snake_case", "camel")).toBe("snakeCase");
      });

      it("should convert kebab-case to camelCase", () => {
        expect(convertCase("kebab-case", "camel")).toBe("kebabCase");
      });

      it("should handle single word", () => {
        expect(convertCase("word", "camel")).toBe("word");
      });

      it("should handle numbers", () => {
        expect(convertCase("api_2_version", "camel")).toBe("api2Version");
      });
    });

    describe("to PascalCase", () => {
      it("should convert camelCase to PascalCase", () => {
        expect(convertCase("camelCase", "pascal")).toBe("CamelCase");
      });

      it("should convert snake_case to PascalCase", () => {
        expect(convertCase("snake_case", "pascal")).toBe("SnakeCase");
      });

      it("should convert kebab-case to PascalCase", () => {
        expect(convertCase("kebab-case", "pascal")).toBe("KebabCase");
      });

      it("should handle single word", () => {
        expect(convertCase("word", "pascal")).toBe("Word");
      });

      it("should handle consecutive uppercase", () => {
        expect(convertCase("JSONDataAPI", "pascal")).toBe("JsonDataApi");
      });
    });

    describe("edge cases", () => {
      it("should handle empty string", () => {
        expect(convertCase("", "pascal")).toBe("");
        expect(convertCase("", "camel")).toBe("");
        expect(convertCase("", "snake")).toBe("");
        expect(convertCase("", "kebab")).toBe("");
      });

      it("should handle only separators", () => {
        expect(convertCase("___", "pascal")).toBe("");
        expect(convertCase("---", "camel")).toBe("");
      });

      it("should handle leading/trailing separators", () => {
        expect(convertCase("_test_case_", "pascal")).toBe("TestCase");
        expect(convertCase("-test-case-", "camel")).toBe("testCase");
      });

      it("should handle multiple consecutive separators", () => {
        expect(convertCase("test__case", "pascal")).toBe("TestCase");
        expect(convertCase("test--case", "camel")).toBe("testCase");
      });

      it("should handle mixed separators", () => {
        expect(convertCase("test_case-name", "pascal")).toBe("TestCaseName");
      });
    });
  });

  describe("convertAllCases function", () => {
    it("should return all case formats", () => {
      const result = convertAllCases("PascalCase");

      expect(result).toEqual({
        pascal: "PascalCase",
        camel: "pascalCase",
        snake: "pascal_case",
        kebab: "pascal-case",
      });
    });

    it("should handle snake_case input", () => {
      const result = convertAllCases("snake_case_name");

      expect(result).toEqual({
        pascal: "SnakeCaseName",
        camel: "snakeCaseName",
        snake: "snake_case_name",
        kebab: "snake-case-name",
      });
    });

    it("should handle kebab-case input", () => {
      const result = convertAllCases("kebab-case-name");

      expect(result).toEqual({
        pascal: "KebabCaseName",
        camel: "kebabCaseName",
        snake: "kebab_case_name",
        kebab: "kebab-case-name",
      });
    });

    it("should handle camelCase input", () => {
      const result = convertAllCases("camelCaseName");

      expect(result).toEqual({
        pascal: "CamelCaseName",
        camel: "camelCaseName",
        snake: "camel_case_name",
        kebab: "camel-case-name",
      });
    });

    it("should handle complex input with numbers", () => {
      const result = convertAllCases("JSONData2API");

      expect(result).toEqual({
        pascal: "JsonData2Api",
        camel: "jsonData2Api",
        snake: "json_data_2_api",
        kebab: "json-data-2-api",
      });
    });

    it("should handle single word", () => {
      const result = convertAllCases("word");

      expect(result).toEqual({
        pascal: "Word",
        camel: "word",
        snake: "word",
        kebab: "word",
      });
    });
  });
});
