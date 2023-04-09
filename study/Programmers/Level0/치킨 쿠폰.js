//[level 0] 치킨 쿠폰 120884
//https://school.programmers.co.kr/learn/courses/30/lessons/120884

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(chicken) {
    var total = 0;
    
    while (chicken >= 10) {
        div = parseInt(chicken / 10);
        mod = chicken % 10;
        
        total += div
        chicken = div + mod
    }
    
    return total;
}