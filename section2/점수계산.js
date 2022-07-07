const input = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function sol(input) {
    let result = 0;
    let temp = 0;
    for (let i of input) {
        if (i === 1) {
            temp += 1;
        } else {
            temp = 0;
        }
        result += temp;
    }

    return result;
}

console.log(sol(input))