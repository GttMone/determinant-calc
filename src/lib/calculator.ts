export function calculate2X2(values: number[]) {
    const [a, b, c, d] = values;
    return (a * d) - (b * c);
}

export function calculate3X3(values: number[]) {
    const cols = [
        [values[0], values[3], values[6]],
        [values[1], values[4], values[7]],
        [values[2], values[5], values[8]],
    ];

    cols.push(cols[0], cols[1]);

    const add1 = cols[0][0] * cols[1][1] * cols[2][2];
    const add2 = cols[1][0] * cols[2][1] * cols[3][2];
    const add3 = cols[2][0] * cols[3][1] * cols[4][2];

    const sub1 = cols[4][0] * cols[3][1] * cols[2][2];
    const sub2 = cols[3][0] * cols[2][1] * cols[4][2];
    const sub3 = cols[2][0] * cols[4][1] * cols[3][2];

    return add1 + add2 + add3 - sub1 - sub2 - sub3;
}

export function calculate4X4(values: number[]) {
    const primaryRow = [values[0], values[1], values[2], values[3]];
    const primaryElement = primaryRow[0];

    const updatedMatrix = [];

    for (let index = 1; index <= 3; index++) {
        const rowToUpdate = [values[index * 4], values[index * 4 + 1], values[index * 4 + 2], values[index * 4 + 3]];
        if (rowToUpdate[0] === 0) {
            updatedMatrix.push(rowToUpdate);
            continue;
        }
        updatedMatrix.push(getTruncatedRow(primaryRow, rowToUpdate));
    }

    for (const row of updatedMatrix) {
        row.shift();
    }

    return primaryElement * calculate3X3([...updatedMatrix[0], ...updatedMatrix[1], ...updatedMatrix[2]]);
}

function getTruncatedRow(primaryRow: number[], rowToUpdate: number[]) {
    const primaryElement = primaryRow[0];
    const secondaryElement = rowToUpdate[0];

    const multiplier = (-secondaryElement) / primaryElement;

    const multipliedPrimaryRow = primaryRow.map((value) => value * multiplier);
    const updatedRow = multipliedPrimaryRow.map((value, index) => value + rowToUpdate[index]);

    return updatedRow;
}