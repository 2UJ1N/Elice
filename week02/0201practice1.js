// 자바스크립트 문제집 Ⅰ (10)
/* 엘리스 플랫폼에서 document.write()로 작성하지만 vscode에서 실행 시 결과 확인하려면 console.log() */

// 숫자와 문자열
// (100/100)

var a = 1;
var b = 2;

var A = "1";
var B = "2";

console.log(a + b);
console.log(A + B);



// 함수 만들고 호출하기
// (100/100)

/* 1. add 함수 생성 */
function add(x, y){
    return x + y;
}


/* 2. 함수 호출한 결과 웹 화면에 출력 */
console.log(add(2, 2))
console.log(add("Hello ", "Elice"))



// 문자열 관련 함수 만들기
// (100/100)

function addStringLength(str1, str2) {
    var a = str1.length;
    var b = str2.length;

    return a + b;
};

// abc, de 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = "abc";
var inputB = "de";

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA, inputB], func: addStringLength }



// 문자열 관련 함수 만들기 2
// (100/100)

function repeatString(str, num) {
    var answer = '';

    for(num; num > 0; num--){
        answer = answer + str;
    }

    return answer;
};

// abc, 2 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = "abc";
var inputB = 2;

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA, inputB], func: repeatString }



// 문자열 관련 함수 만들기 3
// (100/100)

function removeBlank(str){
    result = str.split(' ').join('');

    return result;
}

// hello world 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = "hello world";

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: removeBlank }



// 배열 관련 함수 만들기
// (100/100)

function sortStringArray(arr){
    arr.sort();

    return arr;
}

// "c", "b", "d" 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = ["c", "b", "d"];

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: sortStringArray }



// 배열 관련 함수 만들기 2
// (100/100)

function reverseStringArray(arr){
    arr.sort();
    arr.reverse();

    return arr;
}

// "c", "b", "d" 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = ["c", "b", "d"];

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: reverseStringArray }



// 배열 관련 함수 만들기 3
// (100/100)

function addMiddleNumbers(arr){
    return arr[1] + arr[4] + arr[6];
}

// 1, 2, 3, 4, 5, 6, 7 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = [1, 2, 3, 4, 5, 6, 7];

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: addMiddleNumbers }



// 객체 관련 함수 만들기
// (100/100)

function makeTotalPrice(inputA) {
    var q1 = inputA.quantity1;
    var p1 = inputA.price1;
    var q2 = inputA.quantity2;
    var p2 = inputA.price2;

    return(q1 * p1 + q2 * p2)
}

// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = {
  quantity1: 4,
  price1: 500,
  quantity2: 2,
  price2: 300
};

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: makeTotalPrice }



// 객체 관련 함수 만들기 2
// (100/100)

function makeIntroducingText(inputA){
    var name = inputA.firstName;
    var sung = inputA.lastName;
    var age = inputA.age;

    return ("안녕하세요, 저의 이름은 " + sung + name + "이고, 나이는 " + age + "살입니다.")
}

// 아래 문자열과 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
var inputA = {
  firstName: "태환",
  lastName: "박",
  age: 32
};

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: makeIntroducingText }