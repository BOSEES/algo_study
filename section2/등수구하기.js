const input = [92, 92, 92, 100, 76];

function sol(input) {
    let result = [];

    for (let i of input) {
        let temp = 0;
        for (let j of input) {
            if (i >= j) temp++
        }
        result.push(input.length + 1 - temp);
    }

    return result;
}

console.log(sol(input));