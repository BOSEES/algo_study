const input1 = [[3,4,1,2],[4,3,2,1],[3,1,4,2]];
const input2 = 3;

//그래프 만들어서 풀음
function sol(input1, input2) {
    let result = 0;
    let tempArray = Array.from({length: input1[0].length + 1}, () => Array(input1[0].length + 1).fill(0));

    for (let i = 0; i < input1.length; i++) {
        //3번 반복
    
        for (let j = 0; j < input1[i].length - 1; j++) {
            //시험 본사람 - 1까지 반복

            for (let k = 0 + j + 1; k < input1[i].length; k++) {
                let x = input1[i][j];
                let y = input1[i][k];

                tempArray[x][y] += 1;
                if (tempArray[x][y] === input2) result++;
            }
        }
    }

    return result;
}

console.log(sol(input1, input2));
