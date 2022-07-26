const input = [7, 3, 9, 5, 6, 12];

function sol(input) {
    const result = [input[0]];

    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            result.push(input[i]);
        }
    }

    return result.join(" ");
}

console.log(sol(input));