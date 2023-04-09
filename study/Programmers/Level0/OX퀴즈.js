//[level 0] OX퀴즈 120907
//https://school.programmers.co.kr/learn/courses/30/lessons/120907

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(quiz) {
    var result = [];
    
    for (let q of quiz) {
        chk = q.split(' ');
        var a = (chk[1] === '+')? Number(chk[0]) + Number(chk[2]) : Number(chk[0]) - Number(chk[2]);
        
        result.push((a === Number(chk[4]))? 'O' : 'X');    
    }
    
    return result ;
}