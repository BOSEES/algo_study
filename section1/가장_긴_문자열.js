const input = ["teacher", "time", "student", "beautiful", "good"];

function sol(input) {
    let result = "";

    input.forEach(e => {
        if (result.length < e.length) result = e;
    });

    return result;
}

console.log(sol(input));