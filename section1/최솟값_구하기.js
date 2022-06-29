const input = [5,3,7,11,2,15,17];

function solution(input) {
    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        if (result > input[i]) {
            result = input[i];
        }
    }

    return result;
}

console.log(solution(input))