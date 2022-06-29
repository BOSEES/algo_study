const input = [12,77,38,41,53,92,85];

function solution(input) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        if (isOdd(input[i])) {
            sum += input[i];
            min = Math.min(min, input[i]);
        }
    }

    return `${sum}\n${min}`
}

function isOdd(number) {
    return number % 2 !== 0 ? true : false;
}

console.log(solution(input));