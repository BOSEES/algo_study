const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function sol(input) {
    let result = [];
    for (let i = 0; i < input.length; i++)  {
        let parseStringAndReverse = parseInt(String(input[i]).split("").reverse().join(""));
        if (isPrime(parseStringAndReverse)) result.push(parseStringAndReverse);
    }

    return result;
}

function isPrime(num) {
    let result = true;
    if (num === 1) return false;
    for(let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return result;
}

console.log(sol(input))