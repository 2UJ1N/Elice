//[level 1] 서울에서 김서방 찾기 12919
//https://school.programmers.co.kr/learn/courses/30/lessons/12919

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] == "Kim") return `김서방은 ${i}에 있다`;
    }
}