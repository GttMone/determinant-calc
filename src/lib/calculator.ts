export function calculate2X2(values: number[]) {
    const [a, b, c, d] = values;
    return (a * d) + (b * c);
}

export function calculate3X3(values: number[]) {
    const cols = [
        [values[0], values[3], values[6]],
        [values[1], values[4], values[7]],
        [values[2], values[5], values[8]],
    ]
    cols.push(cols[0], cols[1]);
    
    const add1 = cols[0][0] * cols[1][1] * cols[2][2];
    const add2 = cols[1][0] * cols[2][1] * cols[3][2];
    const add3 = cols[2][0] * cols[3][1] * cols[4][2];

    // const sub1 = cols[4][0] * 
}