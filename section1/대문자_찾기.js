const input = "KoreaTimeGood";

function sol(input) {
    let result = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() === input[i]) result++;
    }

    return result;
}

console.log(sol(input))