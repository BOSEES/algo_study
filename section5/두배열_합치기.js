const input1 = [2, 3, 6, 7, 9];
const input2 = [1, 3, 5];

function sol(input1, input2) {
    let result = [];
    let p1 = 0;
    let p2 = 0;

    while(p1 < input1.length && p2 < input2.length) {
        if (input1[p1] < input2[p2]) {
            result.push(input1[p1]);
            p1++
        } else {
            result.push(input2[p2]);
            p2++
        }
    }

    if (p1 !== input1.length) {
        for (let i = p1; i < input1.length; i++) {
            result.push(input1[i])
        }
    } else if (p2 !== input2.length) {
        for (let i = p2; i < input2.length; i++) {
            result.push(input2[i])
        }
    }

    return result;
}

console.log(sol(input1, input2));