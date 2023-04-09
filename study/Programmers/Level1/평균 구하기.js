//[level 1] 평균 구하기 12944
//https://school.programmers.co.kr/learn/courses/30/lessons/12944

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(arr) {
  var sum = 0
  for (let i of arr) sum += i;
  
  return sum / arr.length
}