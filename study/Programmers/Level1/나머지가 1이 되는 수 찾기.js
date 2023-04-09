//[level 1] 나머지가 1이 되는 수 찾기 87389
//https://school.programmers.co.kr/learn/courses/30/lessons/87389

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    for (let i = 1; ; i++)
        if (n % i === 1) return i
}