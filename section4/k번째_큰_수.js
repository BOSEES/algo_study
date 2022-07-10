const input1 = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
const input2 = [10, 3];

function sol(input1, input2) {
    let result = [];
    input1.sort((a, b) => b - a);

    for (let i = 0; i < input2[0] - 2; i++) {
        for (let j = 1 + i; j < input2[0] -1; j++) {
            for (let k = 1 + j; k < input2[0]; k++) {
                result.push(input1[i] + input1[j] + input1[k]);
                if (result.length === input2[1]) return result[result.length - 1];
            }
        }
    }
}

console.log(sol(input1, input2))