//[level 1] 가운데 글자 가져오기 12903
//https://school.programmers.co.kr/learn/courses/30/lessons/12903

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(s) {
    var n = s.length / 2
    return (s.length % 2 == 0)? s.substring(n - 1, n + 1) : s.substring(n, n + 1)
}