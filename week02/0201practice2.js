// 자바스크립트 문제집 Ⅱ (10)
/* 엘리스 플랫폼에서 document.write()로 작성하지만 vscode에서 실행 시 결과 확인하려면 console.log() */

// 변수 비교하기
// (100/100)

var a = 10;
var b = 10;

document.write(a == b);
document.write(a === b);

b = "10"

document.write(a == b);
document.write(a === b);



// 소수의 합 구하기
// (100/100)
function isPrime(num){
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}

var sum = 2;

for (var i = 3; i <= 200; i++){
    if (isPrime(i) === 1) 
        sum += i;
}

document.write("1이상 200이하의 소수의 합 = ");
document.write(sum);



// 짝수 반환 함수 만들기
// (100/100)

function getOnlyEvenNumber(arr) {

    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            result.push(arr[i]);
    }

    return result;
}

// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [1, 2, 3, 4, 5, 6, 7]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getOnlyEvenNumber }



// 홀수 반환 함수 만들기
// (100/100)

function getOnlyOddNumber(arr) {

    var result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0)
            result.push(arr[i]);
    }

    return result;
}

// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [1, 2, 3, 4, 5, 6, 7]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getOnlyOddNumber }



// 각 자리수 반환 함수 만들기
// (100/100)

function getDigits(n) {

    var digit = [];

    while (n > 0) {
        digit.push(n % 10);
        n = parseInt(n / 10);
    }
   
   return digit.reverse();
}

// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = 1100

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getDigits }



// 자릿수 배열을 숫자로 되돌리는 함수 만들기
// (100/100)

function makeNumberFromDigits(arr) {
    var n = arr.length;
    var sum = 0;

    for (var i = 0; i < n; i++) {
        var j = n - 1 - i

        sum += arr[i] * Math.pow(10, j);    
    }

    return sum;
}

// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [1, 1, 0, 0]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: makeNumberFromDigits }



// 성인만 골라내는 함수 만들기
// (100/100)

function getOnlyAdults(arr) {
    var answer = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age >= 20) 
            answer.push(arr[i].name);

    }

    return answer;
}

// 아래 문자열과 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [{
    name: "박태환",
    age: 35
  }, 
  {
    name: "유재석",
    age: 49
  },
  {
    name: "김강훈",
    age: 12
  },
  {
    name: "이지원",
    age: 15
  }]
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = { inputs: [inputA], func: getOnlyAdults }



// 어린이만 골라내는 함수 만들기
// (100/100)

function getOnlyChilds(arr) {
    var answer = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age < 20) 
            answer.push(arr[i].name);
    }

    return answer;
}

// 아래 문자열과 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [{
  name: "박태환",
  age: 35
}, 
{
  name: "유재석",
  age: 49
},
{
  name: "김강훈",
  age: 12
},
{
  name: "이지원",
  age: 15
}]

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getOnlyChilds }



// 직각삼각형 여부를 판단하는 함수 만들기
// (100/100)

function isRightTriangle(num1, num2, num3){
    if (num1 ** 2 === num2 ** 2 + num3 **2) 
        return true;
    else
        return false;
}

// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = 5
var inputB = 3
var inputC = 4

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA, inputB, inputC], func: isRightTriangle }