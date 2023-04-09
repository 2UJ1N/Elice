//[level 1] 자릿수 더하기 12931
//https://school.programmers.co.kr/learn/courses/30/lessons/12931

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n)
{
    var answer = 0
    var num = n.toString().split('');

    for (let i of num) {
        answer += parseInt(i)
    }

    return answer;
}