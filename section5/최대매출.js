const input1 = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const input2 = 3;
const sol = (input1, input2) => {
    let result = 0;

    for (let i = 0; i < input1.length - input2; i++) {
        let sum = 0;

        for (let j = i; j < input2 + i; j++) {
            sum += input1[j];
        }
        
        if (result < sum) result = sum;
    }

    return result;
}

console.log(sol(input1, input2));