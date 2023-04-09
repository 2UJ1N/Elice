//[level 1] 핸드폰 번호 가리기 12948
//https://school.programmers.co.kr/learn/courses/30/lessons/12948

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(phone_number) {
    var answer = '';
    for (let i = 0; i < phone_number.length - 4; i++) answer += "*"
    
    return answer + phone_number.substr(-4);
}