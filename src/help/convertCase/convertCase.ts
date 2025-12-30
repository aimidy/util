type CaseStyle = "pascal" | "camel" | "snake" | "kebab";

/** 把各種命名（Pascal/camel/snake/kebab/混雜）拆成單字 tokens */
function tokenize(input: string): string[] {
  if (!input) return [];

  // 先把 - 與 _ 轉成空白，再把其他非字母數字當分隔
  const normalized = input
    .replace(/[_-]+/g, " ")
    .replace(/[^A-Za-z0-9 ]+/g, " ")
    .trim();

  if (!normalized) return [];

  const roughParts = normalized.split(/\s+/);

  const tokens: string[] = [];
  for (const part of roughParts) {
    // 在大小寫/數字邊界切開
    // 例: "JSONDataAPI2" -> ["JSON", "Data", "API", "2"]
    const sub = part.match(/[A-Z]+(?=[A-Z][a-z]|[0-9]|$)|[A-Z]?[a-z]+|[0-9]+/g);
    if (sub) tokens.push(...sub);
  }

  // 統一成小寫 tokens（組裝時再決定大小寫）
  return tokens.map((t) => t.toLowerCase());
}

function capitalize(s: string): string {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

/** 主轉換函式：把 input 轉成指定命名風格 */
export function convertCase(input: string, to: CaseStyle): string {
  const tokens = tokenize(input);
  if (tokens.length === 0) return "";

  switch (to) {
    case "snake":
      return tokens.join("_");
    case "kebab":
      return tokens.join("-");
    case "camel":
      return tokens[0] + tokens.slice(1).map(capitalize).join("");
    case "pascal":
      return tokens.map(capitalize).join("");
  }
}

/** 也提供一次拿到全部格式 */
export function convertAllCases(input: string) {
  return {
    pascal: convertCase(input, "pascal"),
    camel: convertCase(input, "camel"),
    snake: convertCase(input, "snake"),
    kebab: convertCase(input, "kebab"),
  };
}
