//[level 1] 수박수박수박수박수박수? 12922
//https://school.programmers.co.kr/learn/courses/30/lessons/12922

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = '';
    for (let i = 0; i < parseInt(n / 2); i++) answer += "수박";
    return (n % 2 == 0)? answer : answer + "수";
}