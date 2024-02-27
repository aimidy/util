/**
 * 底線轉駝峰
 * @param str
 * @returns
 */
export function strToHump(str: string) {
  if (str.startsWith('_')) str = str.slice(1);

  return str.replace(/([^_])(?:_+([^_]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}