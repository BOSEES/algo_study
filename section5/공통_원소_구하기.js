const input1 = [1, 3, 9, 5, 2];
const input2 = [3, 2, 5, 7, 8];

function sol(input1, input2) {
    let result = [];
    input1.sort();
    input2.sort();
    let p1 = 0;
    let p2 = 0;

    while(p1 < input1.length && p2 < input2.length) {
        if (input1[p1] < input2[p2]) {
            p1++
        } else if (input1[p1] === input2[p2]) {
            result.push(input1[p1]);
            p1++;
            p2++;
        } else {
            p2++;
        }
    }

    return result;
}

console.log(sol(input1, input2));