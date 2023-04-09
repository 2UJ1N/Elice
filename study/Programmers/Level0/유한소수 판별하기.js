//[level 0] 유한소수 판별하기 120878
//https://school.programmers.co.kr/learn/courses/30/lessons/120878

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(a, b) {
    var g = 1
    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i == 0 && b % i == 0) g = i
    }
    
    b = b / g;
    
    while (b % 2 === 0) b = b / 2;
    while (b % 5 === 0) b = b / 5;
    
    return (b === 1)? 1 : 2;
}