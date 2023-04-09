//[level 1] x만큼 간격이 있는 n개의 숫자 12954
//https://school.programmers.co.kr/learn/courses/30/lessons/12954

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(x, n) {
    var answer = [];
    for (let i = 1; i<=n; i++)
        answer.push(x*i);
    return answer;
}