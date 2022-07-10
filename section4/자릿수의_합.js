let input = [128, 460, 603, 40, 521, 137, 123];

function sol(input) {
    let result = 0;
    let max = 0;
    
    for (let i = 0; i < input.length; i++) {
        let parseString = String(input[i]);
        let temp = 0;
        for(let j = 0; j < parseString.length; j++) {
            temp += parseInt(parseString[j]);
        }
        if (max < temp) {
            max = temp;
            result = input[i];
        } else if (max === temp) {
            if (result < input[i]) {
                result = input[i]
            }
        }
    }

    return result;
}

console.log(sol(input))