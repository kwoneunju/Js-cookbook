# 잘 변하는 자바스크립트 객체
자바스크립트는 유연하고 적용 능력이 뛰어나 함수형 프로그래밍과 객체 지향 개발을 무리없이 둘 다 수용함

<br>

**[ 자바스크립트의 객체 지향 능력과 연관된 주의사항 ]**
* 클래스와 클래스 인스턴스를 기반으로하는 Java or C++같은 언어와 달리,<br>
  자바스크립트는 프로토타입 상속(prototypical inheritance)을 기반으로 함
* 프로토타입 상속<br>
  * 클래스가 아닌 기존 객체의 새 인스턴스를 생성할 때 재사용이 일어난다는 의미
  * 클래스 상속으로 기능을 확장하는 것이 아닌 기존 객체에 새로운 속성과 메서드를 추가하여 프로토 타입 확장 가능
* 프로토타입 기반의 언어
  * [???] 프로그램을 만들기 전에 먼저 클래스를 생성해야하는 부담감이 업ㅄ음
  * [???] 프로그램을 개발하는데 주력 > 후에 객체 프레임워크를 프로그램에서 만들어내면 됨

<br>

**[ 함수형 프로그래밍과 객체 지향적 프로그래밍 ]**<br>
jQuery와 Node.js의 폭발적인 성장 후 전통적인 프로토타입 객체 기반 기술보다 함수형 프로그래밍 개방방식을 사용하는 추세가 증가
* 함수형 프로그래밍
  * [장점]
    * 원하지 않는 부작용을 일으킬 확률이 낮음
    * 코드를 보다 간단하게 읽고 유지 가능
    * [???] 애매한 "통합" 부분에 시간을 적게 쓰는 듯 보임
* 객체 지향적 프로그래밍
  * [장점]
    * 디자인 규칙 이해하기 쉬움
    * 오랜 시간에 걸쳐 정립되고 알려진 개발 패러다임
* [디노 에스포지토가 작성한 함수형 프로그래밍과 각체 지향형 개발 비교에 대한 자료](https://docs.microsoft.com/en-us/previous-versions/msdn10/gg476048(v=msdn.10))

<br>

## 4.1 객체 멤버를 비공개로 만들기
**Q. 하나 이상의 객체 속성을 비공개로 생성 > 객체 인스턴스 밖에서 접근 불가**
```
function Tune(song, artist) {
    var title = song;
    this.concat = function() {
        return title + " " + artist
    }
}

var happySongs = [];
happySongs[0] = new Tune("Putting on the Ritz", "Ella Fitzgerald")
console.log(happySongs[0].title)    // undefined
console.log(hakppySongs[0].concat())    // 정상 출력
```
* 객체 생성자(함수 몸체) 안의 변수
  * this를 사용해 객체에 포함되어 있지 않는 한 객체 밖에서 접근 불가
  * 변수를 var 키워드를 사용해 재정의 or 매개변수로 전달되었을 경우
    * Tune의 내부 함수인 concat() 메서드가 접근가능한 비공개 데이터 멤버가 됨
* 특권 메서드(privileged method)
  * 비공개 데이터 멤버에 접근할 수 있지만, this를 통해 외부에 노출될 수 있는 concat()과 같은 유형의 메소드
  * [ + 추가 설명(by 더글라스 크록포드) ]
    * 자바스크립트는 클로저를 갖고 있기 때문에 공개, 비공개, 특권 멤버라는 패턴이 가능
    * 즉, <br>
      \- 내부 함수는 항상 변수와 외부 함수의 인수에 접근 가능<br>
      \- 외부 함수가 반환한 후라 할지라도 접근 가능<br>
      \- 비공개 멤버와 특권 멤버는 객체를 생성할 때만 생성 가능<br>
      \- 공개 멤버는 아무 때나 추가 가능
  * [ 유의사항 ]
    * 변수를 비공개하는 것이 약간은 좀 실체가 없다는 것에 유의
* 생성자 함수의 바깥에서 속성에 값 할당 가능
* 비공개 데이터 겹쳐 쓰는 것도 가능
  ```
  happySongs[0].title = 'testing';
  console.log(happySongs[0].title);
  ```
  * [ 참고 ]
    * 비공개 데이터<br>
      이 데이터는 직접 접근하면 프로그램이 망가질 수 있다를 의미하는 개발자와의 약속 (객체의 보안을 유지하는 의미가 아님)
    * 보통 비공개 데이터 멤버에 언더바(_)를 사용하여 직접 접근하거나 설정할 수 없다는 것을 나타냄

<br>

## 4.2 프로토타입을 사용해 객체 생성하기
**Q. 새로운 객체를 생성 > 단, 속성과 메서드를 모두 생성자 함수에 추가하고싶지 않음**
```
Tune.prototype.addCategory = function(categoryName) {
  this.category = categoryName;
}
```
* **자바스크립트에서 Object는 모든 객체의 조상**
* 객체는 Object의 메서드와 속성을 Object의 prototype을 통새 상속
  * prototype을 사용하여 기존의 객체에 새로운 메소드 추가 가능
   ```
   var str = 'one';
   String.prototype.exclaim = function() {
     if(this.length == 0) return this;
     return this + '!';
   }

   var str2 = 'two';
   console.log(str.exclaim()) // one
   console.log(str2.exclaim())  // two
   ```
* ES5 이전: String 객체에 trim()이 추가되어 있지 않음<br>
  \- String 객체에 prototype 객체를 사용해 trim 메서드를 추가해서 사용
* ES5 이후: String 객체에 trim() 추가
  * 직접 만든 trim 메서드로 String 객체를 확장할 경우 표준 trim 메서드를 사용할 때와 다르게 동작할 수 있으므로 이를 방지하기 위해 라이브러리에 그 메서드가 있는지 먼저 확인이 필요함
  ```
  String.prototype.trim = function() {
    return (this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""));
  }
  ```
* [prototype을 사용한 객체 확장의 장점]
  * 효율성의 증가
    * 함수 생성자로 직접 메서드를 추가하면 객체의 모든 인스턴스가 각각 이 함수의 복사본을 가짐
    * 객체 자체에서 메서드를 생성하고, 객체의 모든 인스턴스가 똑같이 공유함
* [prototype을 사용한 객체 확장의 단점]
  * concatTitleArtist() 메서드가 prototype을 통해 정의되었다면 이 데이터 멤버에 접근하려고 할 때, 오류가 발생
  * **생성자 함수 내에서 prototype을 사용해 직접 메서드를 정의**하면 메서드는 함수의 유효 범위에 있고 비공개 데이터에 접근가능하지만, **새로운 객체 인스턴스가 생성될 때마다 그 데이터는 오버라이드(override)** 된다
  ```
  function Tune(title, artist) {
    var title = title;
    var artist = artist;
    Tune.prototype.concatTitleArtist = function() {
      return title + " " + artist;
    }
  }
  ```
* prototype 함수에 유일한 데이터는 this를 통해 얻어지는 것뿐
  * [???] 꼼수 가능<br>
    But,<br>
    프로그램을 더 복잡하게 만들 뿐 아니라 prototype을 사용할 때 얻을 수 있는 효율성마저 떨어뜨림
* **[ 일반적으로 함수가 비공개 데이터를 다루어야 한다면 ]**
  1. 데이터를 함수 생성자 안에서 정의
  2. prototype 사용하지 말 것<br>
    \> [???] 사용할 경우: this를 통해 데이터에 접근 가능해지며, 한 번 생성된 객체 속성은 변경되지 않을 것임

  ```
  var sad = new Tune('Sad Song', 'Sad Singer');
  var happy = new Tune('Happy'. 'Happy Singer');
  console.log(sad.concatTitleArtist()); // Happy happy Singer
  ```
