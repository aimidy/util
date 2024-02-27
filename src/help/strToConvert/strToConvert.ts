/**
 * 駝峰轉小寫+convert(default:底線)
 * @param str
 * @returns
 */
export function strToConvert(str: string, convert: string = "_") {
    return str.replace(/\B([A-Z])/g, `${convert}$1`).toLowerCase();
}