//[level 1] 콜라츠 추측 12943
//https://school.programmers.co.kr/learn/courses/30/lessons/12943

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num) {
    if (num == 1) return 0;
    var n = 0;
    
    while (1) {
        n ++;
        num = (num % 2 == 0)? num / 2 : num * 3 + 1
        
        if (num == 1) return n;
        if (n >= 500) return -1;
    }
}