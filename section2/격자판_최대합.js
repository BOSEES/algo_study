let input =[[10, 13, 10, 12, 15], 
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];

function sol(input) {
    let max1 = 0;
    let max2 = 0;
    let max3 = 0;
    let max4 = 0;

    for (let i = 0; i < input.length; i++) {
        let temp1 = 0;
        let temp2 = 0;

        for (let j = 0; j < input.length; j++) {
            temp1 += input[i][j];
            temp2 += input[j][i];
        }

        if (max1 < temp1) max1 = temp1;
        if (max2 < temp2) max2 = temp2;
    }

    for (let i = 0; i < input.length; i++) {
        max3 += input[i][i];
        max4 += input[i][input.length - 1 - i];
    }

    return Math.max(max1, max2, max3, max4);
}

console.log(sol(input));