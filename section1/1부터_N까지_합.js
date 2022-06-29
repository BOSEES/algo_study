const input = 10;

function solution(input) {
    let result = 0;

    for (let i = input; i > 0; i--) {
        result += i;
    }
    
    return result;
}

console.log(solution(input))