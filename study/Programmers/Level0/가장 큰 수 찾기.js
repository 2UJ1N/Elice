//[level 0] 가장 큰 수 찾기 120899
//https://school.programmers.co.kr/learn/courses/30/lessons/120899

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array) {
    var arr = array.slice().sort((a, b) => b - a); 
    
    var x = arr[0]; //최댓값    
    var y = array.indexOf(x); //최댓값의 인덱스
    
    return [x, y];
}