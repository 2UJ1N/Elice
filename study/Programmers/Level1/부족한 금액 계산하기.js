//[level 1] 부족한 금액 계산하기 82612
//https://school.programmers.co.kr/learn/courses/30/lessons/82612

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(price, money, count) {
    total = 0;
    for (let i = 0; i < count; i++) 
        total += price * (i + 1);

    return (total >= money)? total - money : 0;
}