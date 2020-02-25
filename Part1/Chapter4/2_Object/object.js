function origObject() {
    this.val1 = 'a';
    this.val2 = 'b';
}

origObject.prototype.returnVal1 = function() {
    return this.val1;
}

origObject.prototype.returnVal2 = function() {
    return this.val2;
}

function newObject() {
    this.val3 = 'c';
    origObject.call(this);  // [???]
}

console.log('[4.3] after call: ', newObject.prototype);

newObject.prototype = Object.create(origObject.prototype);
console.log('[4.3] after create: ', newObject.prototype);

newObject.prototype.constructor = newObject;    // [???]
console.log('[4.3] after constructor: ', newObject.prototype);

newObject.prototype.getValues = function() {
    return this.val1 + " " + this.val2 + " " + this.val3;
};

var obj = new newObject();

console.log('[4.3] 객체 기능 상속(newObject) ', obj instanceof newObject);
console.log('[4.3] 객체 기능 상속(origObject) ', obj instanceof origObject);
console.log('[4.3] 객체 기능 상속(getValues) ', obj.getValues());


// JS에서 Object.create를 사용한 고전적인 상속 ex
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
var newBook = new TechBook("The JavaScript CookBook", "Shelley Powers", "Programming");
console.log('[4.3][ex] newBook getBook ', newBook.getBook());

// 각각의 값 출력
console.log('[4.3][ex] newBook getTitle: ', newBook.getTitle());
console.log('[4.3][ex] newBook getAuthor: ', newBook.getAuthor());
console.log('[4.3][ex] newBook getCategory: ', newBook.getCategory());


/* ===================
    QQ. MY TEST
 ===================== */
// [???] constructor
var o = {};
console.log('[constructor] 1. ', o.constructor === Object);

var o = new Object;
console.log('[constructor] 2. ', o.constructor === Object);

var a = [];
console.log('[constructor] 3. ', a.constructor === Array);

var a = new Array;
console.log('[constructor] 4. ', a.constructor === Array);

var n = new Number(3);
console.log('[constructor] 5. ', n.constructor === Number);

// 객체의 생성자 표시
function Tree(name) {
    this.name = name;
}
var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);

/* 
    객체의 생성자 바꾸기
    - true, 1, "test"만이 원래 읽기 전용 생성자를 갖기에 영향을 받지 않음
    - 아래 예는 객체의 constructor 속성에 의존하는게 항상 안저하지는 않음을 보여줌
*/
function Type() {}

var types = [
    new Array(),
    [],
    new Boolean(),
    true,
    new Date(),
    new Error(),
    new Function(),
    function() {},
    Math,
    new Number(),
    1,
    new Object(),
    {},
    new RegExp(),
    /(?:)/,
    new String(),
    'test'
];

for(var i = 0; i < types.length; i++) {
    types[i].constructor = Type;
    console.log('constructor: ', types[i].constructor, ' / instanceof Type: ', types[i] instanceof Type, ' / toString: ', types[i].toString());
}