//[level 1] 약수의 합 120842
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i
        }
    }
    
    return answer;
}