const input1 = "COMPUTERPROGRAMMING";
const input2 = "R";

function sol(input1,input2) {
    let result = 0;
    
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] === input2) result++;
    }

    return result;
}

console.log(sol(input1, input2));