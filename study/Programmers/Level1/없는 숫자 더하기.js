//[level 1] 없는 숫자 더하기 86051
//https://school.programmers.co.kr/learn/courses/30/lessons/86051

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers) {
    var s = 0;
    for (i of numbers) s += i;
    
    return 45 - s
}

function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i; // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
    } 
    return answer;
}