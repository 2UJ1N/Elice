//[level 0] 연속된 수의 합 120923
//https://school.programmers.co.kr/learn/courses/30/lessons/120923

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num, total) {
    const middle_idx = parseInt(num / 2);  // 기준 수 양쪽으로 더하거나 빼야할 숫자 개수
    const middle_num = parseInt(total / num);  // 가운데 or 가운데 왼쪽 들어가는 숫자

    const start_num = (num % 2 == 1)? middle_idx * - 1 : middle_idx * -1 + 1;
    const end_num = middle_idx + 1;
    
    var answer = [];
    for (let i = start_num; i < end_num; i++) answer.push(i + middle_num);

    return answer
}