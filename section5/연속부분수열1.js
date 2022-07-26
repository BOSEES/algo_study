const input1 = [1, 2, 1, 3, 1, 1, 1, 6];
const input2 = 6

function sol(input1, input2) {
    let result = 0;
    let p1 = 0;
    let p2 = 1;

    if (input1[0] === input2) result++;
    if (input1[input1.length - 1] === input2) result++;

    while(p1 < input1.length - 1) {
        let sum = 0;
        for (let i = p1; i <= p2; i++) {
            sum += input1[i];
        }

        if (sum < input2 && p2 === input1.length - 1) {
            return result;
        } else if (sum === input2) {
            p2++;
            result++;
        } else if (sum < input2) {
            p2++;
        } else if (sum > input2) {
            p1++;
        }
    }

    return result;
}

console.log(sol(input1, input2));