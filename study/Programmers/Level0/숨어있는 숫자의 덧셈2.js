//[level 0] 숨어있는 숫자의 덧셈 (2) 120864
//https://school.programmers.co.kr/learn/courses/30/lessons/120864

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var x = my_string.replace(/[a-z]/gi, '*').split('*')
    let result = 0;
    
    for (let i of x){
        if (i >= 1 && i <= 1000)
            result += parseInt(i);
    }
    return result;
}