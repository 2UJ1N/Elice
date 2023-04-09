//질문

//[level 0] 다항식 더하기 120863
//https://school.programmers.co.kr/learn/courses/30/lessons/120863

//결과 
//정확성: 58.3
//합계: 58.3 / 100.0

function solution(polynomial) {
    var num = polynomial.split(' + ');
    var x = 0;
    var n = 0;
    
    for (let i of num) {
        if (i.endsWith('x')) {
            if (i.length > 1) {
                x += Number(i.charAt(0));
            } else x += 1;
        } else n += Number(i);
    }
    
    //출력
    var result = [];
    if (x) result.push(`${x === 1? "" : x}x`);
    if (n) result.push(n);
        
    return result.join(" + ");
}
