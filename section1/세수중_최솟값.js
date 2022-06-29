let input = [6,5,11];

function solution(array) {
    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i]
        }
    }

    return result;
}

console.log(solution(input));