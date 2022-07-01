const input = "good";

function sol(input) {
    let result = "";

    if (input.length % 2 !== 0) {
        return input[Math.floor(input.length / 2)]
    } else {
        for (let i = input.length / 2 - 1; i < input.length / 2 + 1; i++) {
            result += input[i]
        }
    }

    return result;
}

console.log(sol(input));