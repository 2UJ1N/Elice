//[level 0] 외계어 사전 120869
//https://school.programmers.co.kr/learn/courses/30/lessons/120869

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(spell, dic) {
    for (let i of dic) {
        var cnt = 0
        for (let j of spell) {
            if (i.includes(j)) cnt ++;
        }
        
        if (cnt == spell.length) return 1;
    }
    return 2;
}