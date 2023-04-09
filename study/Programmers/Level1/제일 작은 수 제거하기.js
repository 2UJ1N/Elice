//[level 1] 제일 작은 수 제거하기 12935
//https://school.programmers.co.kr/learn/courses/30/lessons/12935

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(arr) {
    var answer = arr.filter(data => data !== Math.min.apply(null, arr))
    
    return (answer.length == 0)? [-1] : answer;
}