//[level 0] 옹알이 (1) 120956
//https://school.programmers.co.kr/learn/courses/30/lessons/120956

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;  
    })

    return answer;
}
