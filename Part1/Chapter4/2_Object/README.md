# 잘 변하는 자바스크립트 객체

## 4.3 객체의 기능 상속하기
**Q. 새로운 객체 유형을 만들 때 기존 자바스크립트 객체의 기능을 상속**
```
function origObject() {
    this.val1 = 'a';
    this.val2 = 'b';
}

origObject.prototype.returnVal1 = function() {
    return this.val1;
};

origObject.prototype.returnVal2 = function() {
    return this.val2;
};

function newObject() {
    this.val3 = 'c';
    origObject.call(this);
}

newObject.prototype = Object.create(origObject.prototype);
newObject.prototype.constructor = newObject;

newObject.prototype.getValues = function() {
    return this.val1 + " " + this.val2 + " " + this.val3;
};

var obj = new newObject();

console.log(obj instanceof newObject);  // true
console.log(obj instanceof origObject); // true
console.log(obj.getValues());   // "a b c"
```

<br>

**[JS에서 Object.create를 사용한 고전적인 상속 ex]**
```
function Book(title, author) {
    this.getTitle = function() {
        return "Title: " + title;
    };
    this.getAuthor = function() {
        return "Author: " + author;
    };
}

function TechBook(title, author, category) {
    this.getCategory = function() {
        return "Technical Category: " + category;
    };
    this.getBook = function() {
        return this.getTitle() + " " + author + " " + this.getCategory();
    };
    Book.apply(this, arguments);
}

TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = TechBook;

// 모든 값 구하기
var newBook = new TechBook("The JavaScript Cokkoboook", "Shelley Powers", "Programming");
console.log(newBook.getBook());

// 각각의 값을 출력
console.log(newBook.getTitle());
console.log(newBook.getAuthor());
console.log(newBook.getCategory());
```

### [Object.create]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  ```
  Object.create(proto[, propertiesObject])
  ```
  * [매개변수] proto: 새로 생성된 객체의 프로토타입 역할을 하는 객체
  * [매개변수] propertiesObject(선택사항): 
  * 자바스크립트의 고전적인 상속 가능

<br>

### [Object.defineProperties]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

<br>

### [call]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

<br>

### [apply]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

<br>

### [instanceof]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)
* 생성자의 prototype 속성이 **객체의 프로토타입 체인 어딘가 존재하는지 판별**

<br>

### [object.prototype.constructor]
* [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)
* 인스턴스의 프로토타입을 만든 Object 함수의 참조를 반환
* 이 속성 값은 함수 자체의 참조임을 주의
* 함수 이름을 포함하는 문자열이 아니라,<br>
  그 값은 1, true 및 "test"와 같은 **원시(primitive) 값에 대해서만 읽기 전용**이다.
```
var o = {};
o.constructor === Object;

var o = new Object;
o.constructor === Object;

var a = [];
a.constructor === Array;

var a = new Array;
a.constructor === Array;

var n = new Number(3);
n.constructor === Number;
```

<br>

### [ES5]
* Object.create()

### [참고]
* [SJ에서 조건문을 효율적으로 쓰기 위한 5가지 팁](https://code-200.tistory.com/14)
