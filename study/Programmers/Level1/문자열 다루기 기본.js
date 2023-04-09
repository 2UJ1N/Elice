//[level 1] 문자열 다루기 기본 12918
//https://school.programmers.co.kr/learn/courses/30/lessons/12918

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(s) {
    if (s.length == 4 || s.length == 6) {
        return s.split("").every(c => !isNaN(c))
    } else return false;
}