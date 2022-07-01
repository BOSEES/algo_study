const input = "BANANA";

function sol(input) {
    return input.split("").map((e) => e === "A" ? "#" : e).join("");
}

console.log(sol(input))