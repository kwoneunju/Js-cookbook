# CHAPTER 1
[ 간단하지만은 않은 자바 스크립트 기본 구성 요소 ]

자바스크립트 기능은 대부분 가장 기본적인 객체 + 데이터 유형으로 구현 가능
 - 문자열 / 숫자 / 불리언 데이터 유형
 - RegExp / Date / Math 내장 객체
   - 정규표현식 / 날짜 / 수학 연산과 같은 기본 기능 제공

## 1.1 자바스크립트 객체(object), 원시(primitive), 리터럴(literal) 구분하기
**Q 객체, 원시, 리터럴의 구별 방법?**
**A** 
* 리터럴(literal)
  * (어구뜻이) 문자 그대로의.
  * 코드상에서 데이터를 표현하는 방식
  * 변수에 넣는 변하지 않는 데이터 그 자체
  * 상수와 마찬가지로 메모리 어딘가에 값이 변하지 않도록 저장되지만 그 이름이 없다.
  * 인용 문자열(String), 부동 소수점수(Number), 불리언(Boolean)과 같은 특정한 형식의 값
    ```
    "이것은 문자열 입니다"
    1.45
    true
    ```
  * 리터럴 표기법: 변수를 선언함과 동시에 그 값을 지정해주는 표기법 == ???초기화????
  * [ 참고 사이트 ]
    * [리터럴 정의](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%84%B0%EB%9F%B4)
    * [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Literals)
    * [[그들이 쓰는 언어] 1. 리터럴](https://asfirstalways.tistory.com/21)
    * [[그냥 참고] 상수와 리터럴이란?](https://mommoo.tistory.com/14)

  * [ 변수와 상수 그리고 리터럴]
    * 변수와 상수는 메모리에 할당된 공간, 리터럴은 이 공간에 저장되는 값
    * 변수: 변하는 변수
    * 상수: 변하지 않는 변수



* 원시(primitive): 데이터 유형의 인스턴스
  * 5가지 유형 존재: 문자열, 숫자, 불리언, null, undefined
  * 상보적인 생성자 객체(constructor object)를 가지는 데이터 유형: 문자열, 숫자, 불리언
    * 내장되어 있는 속성 및 메서드에 접근이 가능해 단순히 값을 할당하고 부차적으로 그 값을 추출하는 것을 넘어서 더 다양한 일처리를 가능하게 해줌
    ```
    var str1 = "이것은 간단한 문자열입니다"
    console.log(str1.length);   // String 객체의 length 속성 사용   // result: 14
    ```
  *  null
  *  undefined

* 리터럴 표현방식 VS 객체를 이용한 원시 Boolean, 문자열, 숫자 변수 생성
  * 리터럴 표현방식
    ```
    var str1 = String("이것은 리터럴 표현방식을 이용한것입니다."); // 원시 문자열
    var num1 = Number(1.45); // 원시 숫자
    var bool1 = Boolean(true);  // 원시 boolean
    if(str1 === "이것은 리터럴 표현방식을 이용한것입니다.") {
      console.log('str equal');
    }
    if(num1 === 1.45) {
      console.log('num equal');
    }
    if(bool1 === true) {
      console.log('bool equal');
    }
    ```
  * 객체
    ```
    var str2 = new String("이것은 String 객체를 이용한것이지요"); // String 객체 인스턴스
    var num2 = new Number(1.56);  // Nunber 객체 인스턴스
    var bool2 = new Boolean(ture);  // Boolean 객체 인스턴스
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
    ```
  * 결과
    * 원시 변수는 리터럴과 완전 일치
    * 객체는 불일치
  * 결과의 이유
    * 원시 데이터는 값으로 비교하고, 그 값은 리터럴이기 때문에 완전 일치 (type이 동일)
    ```
    var str1 = String("이것은 리터럴 표현방식을 이용한것입니다."),
        num1 = Number(1.45),
        bool1 = Boolean(true);
    var str2 = new String("이것은 String 객체를 이용한것이지요"),
        num2 = new Number(1.56),
        bool2 = new Boolean(ture);
    
    // str1 type: string / str2 type: object
    console.log('str1 type: ', typeof(str1), ' / str2 type: ', typeof(str2));
    // num1 type: number / num2 type: object
    console.log('num1 type: ', typeof(num1), ' / num2 type: ', typeof(num2));
    // bool1 type: boolean / bool2 type: object
    console.log('bool1 type: ', typeof(bool1), ' / bool2 type: ', typeof(bool2));
    ```
