/*
    4.1 객체 멤버를 비공개로 만들기
*/
function Tune(song, artist) {
    var title = song;
    this.concat = function() {
        return title + " " + artist;
    }
}
var happySongs = [];
happySongs[0] = new Tune("Putting on the Ritz", "Ella Fitzgerald");
console.log('[4.1] 비공개 데이터(title): ', happySongs[0].title);   // undefined
console.log('[4.1] 특권 메소드(concat()): ', happySongs[0].concat());

happySongs[0].title = 'testing';
console.log('[4.1] 비공개 데이터 재할당(title=testing): ', happySongs[0].title);


/*
    4.2 프로토타입을 사용해 객체 생성하기
*/
Tune.prototype.addCategory = function(categoryName) {
    this.category = categoryName;
}
console.log('[4.2] 새로운 객체 생성하기: ', Tune.prototype);

var str = 'one';
String.prototype.exclaim = function() {
    if(this.length == 0) return this;
    return this + '!';
}

var str2 = 'two';
console.log('[4.2] 기존의 객체에 새로운 메서드 추가 ', str.exclaim());
console.log('[4.2] 기존의 객체에 새로운 메서드 추가 ', str2.exclaim());

// Q. 새로운 객체 인스턴스 생성 후 값 추가, 객체 확장
function Tune2(title, artist) {
    this.concatTitleArtist = function() {
        return title + " " + artist;
    }
}
// 인스턴스를 만들고, 값 출력
happySong2 = new Tune2("Putting on the Ritz", "Ella Fitzgerald");

// 객체 확장
Tune2.prototype.addCategory = function(categoryName) {
    this.category = categoryName;
}

// 카테고리 추가
happySong2.addCategory('Swing');

// 새로운 문단에 노래 정보 출력
var song = 'Title and artist: ' + happySong2.concatTitleArtist() + ' / Category: ' + happySong2.category;

console.log('[4.2] 새로운 객체 인스턴스 생성 후 값 추가, 객체 확장: ', song);


// 생성자 내에서 객체 확장 시, 새로운 객체 생성시 그 데이터가 override
function Tune3(title, artist) {
    var title = title;
    var artist = artist;
    Tune.prototype.concatTitleArtist = function() {
        return title + " " + artist;
    }
}
var sad = new Tune3('Sad Song', 'Sad Singer');
var happy = new Tune3('Haapy Song', 'Happy Singer');
console.log('[4.2] override(sad): ', sad.concatTitleArtist());
console.log('[4.2] override(happy): ', happy.concatTitleArtist());
