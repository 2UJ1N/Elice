//[level 1] 문자열 내 p와 y의 개수 12916
//https://school.programmers.co.kr/learn/courses/30/lessons/12916

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(s){
    var p = 0
    var y = 0

    for (let x of s.toUpperCase()) {
        if (x == 'P') p++;
        if (x == 'Y') y++;
    }

    return (p === y)? true : false;
}