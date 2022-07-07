const input1 = [2,3,3,1,3];
const input2 = [1,1,2,2,3];

function sol(A, B) {
    let result = [];

    for(let i = 0; i < A.length; i++) {
        if (A[i] - B[i] === 1) result.push("A");
        else if (A[i] - B[i] === 0) result.push("D");
        else result.push("B");
    }

    return result.join("\n");
}

console.log(sol(input1, input2));