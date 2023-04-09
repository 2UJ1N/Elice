//[level 0] 문자열 alfrl 120921
//https://school.programmers.co.kr/learn/courses/30/lessons/120921

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(A, B) {
    var chka = A.split('');
    var chkb = B.split('');
    
    if (A === B) return 0;
    
    for (let i = 0; i < A.length; i++) {
        chka.unshift(chka.pop());
        if (chka.join() == chkb.join()) return i + 1;
    }
    return -1;
}