//[level 1] 하샤드 수
//https://school.programmers.co.kr/learn/courses/30/lessons/12947

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(x) {
    var n = x.toString().split('');
    var s = 0
    for (let i of n)
        s += Number(i);
    return (x % s == 0)? true : false;
}