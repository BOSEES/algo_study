const input = "BACBACCACCBDEDE";

const sol = (input) => {
    const hashTable = new Map();
    let result = "";
    let max = 0;

    for (let i = 0; i < input.length; i++) {
        if (hashTable.get(input[i])) {
            hashTable.set(input[i], hashTable.get(input[i]) + 1);
        } else {
            hashTable.set(input[i], 1);
        }
    }

    for (let [key, value]of hashTable) {
        if (max < value) {
            max = value;
            result = key;
        }
    }

    console.log(hashTable)  
    return result;
}

console.log(sol(input));