//[level 0] 진료순서 정하기 120835
//https://school.programmers.co.kr/learn/courses/30/lessons/120835

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(emergency) {
    var arr = emergency.slice().sort((a, b) => b - a);
    
    var answer = [];
    
    for (let i of emergency) {
        for (let j of arr) {
            if (i === j)
                answer.push(arr.indexOf(j) + 1);
        }
    }
    return answer;
}