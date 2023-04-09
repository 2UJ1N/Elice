//[level 1] 약수의 개수와 덧셈 77884
//https://school.programmers.co.kr/learn/courses/30/lessons/77884

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i <= right; i++) {
        var cnt = []
        for (let j = 1; j <= i; j++)
            (i % j == 0)? cnt.push(j) : j;
        
        (cnt.length % 2 == 0)? answer += i : answer -= i;
    }

    return answer;
}