const input1 = "AbaAeCe";
const input2 = "baeeACA";

const sol = (input1, input2) => {
    const hashTable = new Map();

    if (input1.length !== input2.length) return "No";

    for (let key of input1) {
        if (hashTable.get(key)) {
            hashTable.set(key, hashTable.get(key) + 1);
        } else {
            hashTable.set(key, 1);
        }
    }

    for (let key of input2) {
        if (hashTable.get(key) !== 0) {
            hashTable.set(key, hashTable.get(key) - 1);
        } else {
            return "No"
        }
    }

    for (let [key, value] of hashTable) {
        if (value) return "No"
    }

    return "Yes"
}

console.log(sol(input1,input2))