const input1 = [1,3,1,2,3,4,5];
const input2 = 5;

const sol = () => {
    let result = 0;
    let p1 = 0;
    let p2 = 1;

    if (input1[0] <= input2) result++;

    while(p1 < input1.length - 1) {
        let sum = 0;

        for (let i = p1; i <= p2; i++) {
            sum += i;
        }

        if (sum <= input2) {
            result++;
            p2++;
            if (input1[p2] <= input2) result++;
        } else if (sum > input2) {
            p1++;
            if (input1[p1] <= input2 && p1 !== input1.length - 1) result++;
        }
    }

    return result;
}

console.log(sol(input1, input2));