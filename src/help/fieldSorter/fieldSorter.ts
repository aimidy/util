/**
 * 多欄位排序
 * @param sort 
 * @returns 
 */
export function fieldSorter(sort: {
    isDesc?: boolean,
    fields: {
        key: string,
        isNumber?: boolean,
        isDesc?: boolean
    }[]
}) {
    return (a: { [_: string]: any }, b: { [_: string]: any }) => {
        const data = sort.fields
            .map(filed => {
                let dir = 1;
                if (filed.isDesc) {
                    dir = -1;
                }

                let valueA = a[filed.key];
                let valueB = b[filed.key];

                if (!valueA || !valueB)
                    return 0;

                if (filed.isNumber) {
                    valueA = Number(valueA);
                    valueB = Number(valueB);

                    if (Number.isNaN(valueA) || Number.isNaN(valueB))
                        return 0
                }

                return valueA > valueB ? dir : valueA < valueB ? -(dir) : 0;
            }).reduce((p, n) => p ? p : n, 0);

        if (sort.isDesc)
            data * -1;

        return data;
    };
};