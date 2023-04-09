//[level 1] 내적 70128
//https://school.programmers.co.kr/learn/courses/30/lessons/70128

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(a, b) {
    var answer = 0
    for (let i = 0; i < a.length; i++) answer += a[i] * b[i];
    
    return answer;
}