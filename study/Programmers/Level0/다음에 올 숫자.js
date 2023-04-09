//[level 0] 다음에 올 숫자 120924
//https://school.programmers.co.kr/learn/courses/30/lessons/120924

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {
        return common.pop() + (common[1] - common[0]);
    }
    else {
        return common.pop() * parseInt(common[1] / common[0])
    }
}