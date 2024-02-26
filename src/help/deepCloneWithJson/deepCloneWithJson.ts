/**
 * 透過 JSON 複製物件
 * @param obj 要複製的物件
 * @returns
 */
export function deepCloneWithJson<T>(obj: T) {
    return JSON.parse(JSON.stringify(obj));
  }
  