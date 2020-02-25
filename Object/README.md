[20.01.02]

# Object
* 자바스크립트의 기본 타입
* 이름(name), 값(value)로 구성된 속성(property)의 정렬되지 않은 집합
* property의 값으로 값(== variable) or 함수(== method)가 올 수 있다.

```
// 객체 생성
var person = {
    name: "hong,
    birthday: "200102",
    pId: "123123",
    fullId: function() {
        return this.birthday + this.pId;
    }
};

// 객체의 프로퍼티 참조 방법 2가지
person.name;    // hong
person["name"]; // hong

// 객체의 메소드 참조
person.fullId();    // 200102123123
person.fullId;      // function () { return this.birthday + this.pId; }
```


[주의]
* 자바스크립트에서는 숫자, 문자열, 불리언, undefined 타입을 제외한 모든 것이 객체
* 숫자, 문자열, 불리언과 같은 원시 타입은 값이 정해진 객체로 취급되어, 객체로서의 특징도 함께 가짐








[참고 사이트]<br>
[TCPSCHOOL.com - Object](http://tcpschool.com/javascript/js_object_concept)
