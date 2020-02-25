# CHAPTER 1
[ 간단하지만은 않은 자바 스크립트 기본 구성 요소 ]

## 1.2 문자열에서 목록 추출하기
* 아래 문자열에서 아이템 목록만 추출
  This is a list of items: cherries, Limes, oranges, apples.
```
var str3 = "This is a list of items: cherries, Limes, oranges, apples.";

console.log('str3. list item: ', str3.split(':')[1]);
```
```
var str4 = "This is one sentence. This is a sentence with a list of items:' + 'cherries, oranges, apples, bananas. That was the list of items.",
    str4_start = str4.indexOf(':'),
    str4_end = str4.indexOf('.', str4_start + 1);

console.log('result: ', str4.substring(str4_start + 1, str4_end));
```

* split() [[MDN]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  * 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
  * [ 참고 사이트 ]
    [stackoverflow](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402)

  ```
  str.split([separator[, limit]])
  ```

  > **[ 매개변수 ]**<br>
  > \- separator (optional)
  >   * 원본 문자열을 끊어야 할 부분을 나타내는 문자열
  >   * 
  > 
  > \- limit (optional)


* indexOf() [[MDN]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
  * IE 6~ | Edge 12~ | Firefox2~ | chrome 4~ | safari 3.1~ | Opera 3.2~

  ```
  str.indexOf(searchValue, [, fromIndex])
  ```

  > **[ 매개변수 ]**<br>
  > \- searchValue
  >   * 찾으려는 문자열
  >   * 아무 값도 주어지지 않을 경우: "undefined"를 찾으려는 문자열로 사용
  >   * 일치하는 값이 있을 경우: 첫번째 인덱스 반환
  >   * 일치하는 값이 없을 경우: -1 반환
  >   * 대소문자 구분
  >
  > <br>
  >
  > \- fromIndex (optional)
  >   * 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값(정수값)
  >     * default 값은 0: 문자열 전체를 대상으로 찾음
  >     * 음의 정수 일경우: 전체 문자열을 찾음
  >     * fromIndex >= str.length: 검색하지않고 -1 반환

  [ **Q.** indexOf()를 사용하여 문자열 내의 특정 문자 숫자 세기 ]
  ```
  var str = 'To be, or not to be, that is the question.',
      count = 0,
      pos = str.indexOf('e');
  while(pos !== -1) {
    count++;
    pos = str.indexOf('e', pos + 1);
  }
  console.log('e count: ', count);
  ```

* substring()
  * [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)