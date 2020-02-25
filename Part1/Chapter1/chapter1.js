var str1 = "이것은 간단한 문자열입니다";
console.log('str1.length: ', str1.length);


var str1 = String("이것은 리터럴 표현방식을 이용한것입니다."); // 원시 문자열
var num1 = Number(1.45); // 원시 숫자
var bool1 = Boolean(true);  // 원시 boolean
console.log('str1: ', str1, ' / num1: ', num1, ' / bool1: ', bool1);

if(str1 === "이것은 리터럴 표현방식을 이용한것입니다.") {
    console.log('str equal');
}
if(num1 === 1.45) {
    console.log('num equal');
}
if(bool1 === true) {
    console.log('bool equal');
}


var str2 = new String("이것은 String 객체를 이용한것이지요"); // String 객체 인스턴스
var num2 = new Number(1.56);  // Nunber 객체 인스턴스
var bool2 = new Boolean(true);  // Boolean 객체 인스턴스
console.log('str2: ', str2, ' / num2: ', num2, ' / bool2: ', bool2);

if(str2 === "이것은 String 객체를 이용한것이지요") {
    console.log('str2 equal');
} else {
    console.log('str2 not equal');
}
if(num2 === 1.56) {
    console.log('num2 equal');
} else {
    console.log('num2 not equal');
}
if(bool2 === true) {
    console.log('bool2 equal');
} else {
    console.log('bool2 not equal');
}

console.log('str1 type: ', typeof(str1), ' / str2 type: ', typeof(str2));
console.log('num1 type: ', typeof(num1), ' / num2 type: ', typeof(num2));
console.log('bool1 type: ', typeof(bool1), ' / bool2 type: ', typeof(bool2));
