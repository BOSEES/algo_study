const input = "ItisTimeToStudy";

function sol(input) {
    let result = "";
    
    for (let i = 0; i < input.length; i++) {
        result += input[i].toUpperCase();
    }

    return result;
}

console.log(sol(input))