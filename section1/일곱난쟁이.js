const input = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function sol(input) {
    let result = [];
    let sum = input.reduce((prev,curr) => prev + curr);
    let x = 0;
    let y = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 1 + i; j < input.length; j++) {
            let temp = input[i] + input[j];
            if (sum - temp === 100) {
                x = i;
                y = j;
                break;
            }
        }
    }
    
    for (let i = 0; i < input.length; i++) {
        if (i == x || i == y) {
            continue;
        }
        result.push(input[i]);
    }

    return result.join(" ");
}

console.log(sol(input))