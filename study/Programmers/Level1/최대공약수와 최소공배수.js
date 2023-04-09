//[level 1] 최대공약수와 최소공배수
//https://school.programmers.co.kr/learn/courses/30/lessons/12940

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n, m) {
    var answer = [];
    
    for (let i = 1; i <= Math.min(n, m); i ++)
        if (n % i == 0 && m % i == 0) var x = i;
    answer.push(x);
    
    for (let i = Math.min(n, m); i <= 1000000; i++)
        if (i % n == 0 && i % m == 0) {
            answer.push(i);
            break;
        }
    
    return answer;
}