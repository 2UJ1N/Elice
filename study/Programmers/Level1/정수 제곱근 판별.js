//[level 1] 정수 제곱근 판별 12934
//https://school.programmers.co.kr/learn/courses/30/lessons/12934

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    return (Math.sqrt(n) === parseInt(Math.sqrt(n))? Math.pow(Math.sqrt(n) + 1, 2) : -1);
}