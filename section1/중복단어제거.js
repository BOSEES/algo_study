const input = ["good", "time", "good", "time", "student"];

function sol(input) {
    let result = new Set();
    
    for (let i = 0; i < input.length; i++) {
        result.add(input[i]);
    }

    return Array.from(result).join("\n");
}

console.log(sol(input));