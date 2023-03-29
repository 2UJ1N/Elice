//[level 0] 구슬을 나누는 경우의 수 120840
//https://school.programmers.co.kr/learn/courses/30/lessons/120840

//결과 
//정확성: 80.0
//합계: 80.0 / 100.0

function solution(balls, share) {
    
    return factorial(balls) / factorial(balls - share) / factorial(share);
}

function factorial(num) {
    answer = 1;
    
    for (let i = num; i > 0; i--) {
        answer *= i;
    }
    return answer;
}