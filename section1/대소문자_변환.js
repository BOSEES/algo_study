const input = "StuDY";

function sol(input) {
    let result = "";
    
    for (let i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() === input[i]) result += input[i].toLowerCase();
        else result += input[i].toUpperCase();
    }

    return result;
}

console.log(sol(input))