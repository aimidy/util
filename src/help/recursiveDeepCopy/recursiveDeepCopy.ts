/**
* 透過遞迴複製物件
* @param o 
* @returns 
*/
export function recursiveDeepCopy<T = any>(o: T): T {
    switch (Object.prototype.toString.apply(o)) {
        case "[object Array]":
            const tempArry: any = [];
            (o as Array<any>).forEach(value => {
                (tempArry as Array<any>).push(recursiveDeepCopy(value));
            })
            return tempArry;
        case "[object Object]":
            const tempO: any = {};
            Object.keys(o as Object).forEach(key => {
                if (Object.prototype.hasOwnProperty.call(o, key))
                    tempO[key] = recursiveDeepCopy((o as { [_: string]: any })[key]);
            })
            return tempO;
        default:
            return o;
    }
}