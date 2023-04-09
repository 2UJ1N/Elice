//[level 1] 음양 더하기 76501
//https://school.programmers.co.kr/learn/courses/30/lessons/76501

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(absolutes, signs) {
    var answer = 0
    for (let i = 0; i < signs.length; i++) {
        if (signs[i]) answer += absolutes[i]
        else answer -= absolutes[i]
    }
    return answer;
}
