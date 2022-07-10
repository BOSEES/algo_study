const input1 = [5, 28];
const input2 = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

function sol(input1, input2) {
    let result = 0;

    for (let i = 0; i < input2.length; i++) {
        let total = 0;
        let count = 0;
        input2[i][0] = Math.floor(input2[i][0] / 2);

        for (let j = 0; j < input2.length; j++) {
            let tempSum = input2[j][0] + input2[j][1];

            if (total + tempSum <= input1[1]) {
                total += tempSum;
                count++;
            }
        }
        if (result < count ) result = count;
    }

    return result;
};

console.log(sol(input1, input2));