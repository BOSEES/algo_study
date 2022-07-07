const input = [130, 135, 148, 140, 145, 150, 150, 153];

function sol(input) {
    let result = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > max) {
            result++;
            max = input[i];
        }
    }

    return result
}

console.log(sol(input));