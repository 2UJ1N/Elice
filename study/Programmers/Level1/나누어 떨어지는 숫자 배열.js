//[level 1] 나누어 떨어지는 숫자 배열 12910
//https://school.programmers.co.kr/learn/courses/30/lessons/12910

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(arr, divisor) {
    var answer = [];
    for (i of arr) 
        if (i % divisor == 0) answer.push(i);
    
    if (answer.length == 0) return [-1];
    else return answer.sort((a, b) => a - b);
}