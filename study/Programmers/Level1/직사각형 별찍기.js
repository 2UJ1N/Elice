//[level 1] 직사각형 별찍기 12969
//https://school.programmers.co.kr/learn/courses/30/lessons/12969

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (let i = 0; i < b; i++) {
        var answer = "";
        for(let j = 0; j < a; j++)
            answer += "*";
        console.log(answer);
    }
});