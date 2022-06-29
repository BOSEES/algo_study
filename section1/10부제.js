const input1 = [25, 23, 11, 47, 53, 17, 33];
const input2 = 3;

function solution(array, n) {
    let result = 0;

    array.forEach((e) => {
        if (String(e)[1] === String(n)) {
            result++;
        }
    })

    return result;
}

console.log(solution(input1, input2));