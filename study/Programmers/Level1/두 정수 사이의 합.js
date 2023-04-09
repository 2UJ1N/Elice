//[level 1] 두 정수 사이의 합 12912
//https://school.programmers.co.kr/learn/courses/30/lessons/12912

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(a, b) {
    var sum = 0
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
    
    return sum;
}