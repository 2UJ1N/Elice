//[level 0] 로그인 성공? 120883
//https://school.programmers.co.kr/learn/courses/30/lessons/120883

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(id_pw, db) {
  for (let i of db) {
      if (i[0] == id_pw[0])
          return (i[1] == id_pw[1])? "login" : "wrong pw";
  }
  return "fail";
}