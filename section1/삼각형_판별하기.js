const input = [6,7,11];

function solution(input) {
    let result = "YES";
    input.sort();
    let temp = input[2] - input[1];
    if (temp > input[0]) return "NO"
    return result;
}

console.log(solution(input));