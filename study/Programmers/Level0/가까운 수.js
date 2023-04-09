//[level 0] 가까운 수 120890
//https://school.programmers.co.kr/learn/courses/30/lessons/120890

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array, n) {
    array.sort((a, b) => a - b);
    
    var arr = [];
    for (let i of array) arr.push(Math.abs(i - n));
    
    return array[arr.indexOf(Math.min.apply(null, arr))];
}