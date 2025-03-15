// ============================================================
// 1. 변수와 데이터 타입
// ============================================================

// 변수 선언 방식
var oldWay = "var는 함수 스코프를 가집니다";
let modernWay = "let은 블록 스코프를 가집니다";
const constant = "const는 재할당이 불가능합니다";

// 기본 데이터 타입
const numberExample = 42; // 숫자 (정수)
const floatExample = 3.14; // 숫자 (실수)
const stringExample = "Hello World"; // 문자열
const booleanExample = true; // 불리언
const nullExample = null; // null
let undefinedExample; // undefined
const symbolExample = Symbol("id"); // 심볼 (ES6+)

// 객체 (키-값 쌍의 컬렉션)
const objectExample = {
  name: "John",
  age: 30,
  isEmployed: true,
};

// 데이터 타입 확인
console.log(typeof numberExample); // number
console.log(typeof stringExample); // string
console.log(typeof booleanExample); // boolean
console.log(typeof nullExample); // object (JavaScript의 유명한 버그)
console.log(typeof undefinedExample); // undefined
console.log(typeof symbolExample); // symbol
console.log(typeof objectExample); // object

// ============================================================
// 2. 연산자
// ============================================================

// 산술 연산자
const sum = 5 + 3; // 8
const difference = 10 - 4; // 6
const product = 3 * 4; // 12
const quotient = 20 / 5; // 4
const remainder = 10 % 3; // 1
const exponent = 2 ** 3; // 8 (2의 3승)

// 할당 연산자
let x = 10;
x += 5; // x = x + 5;  // 15
x -= 3; // x = x - 3;  // 12
x *= 2; // x = x * 2;  // 24
x /= 4; // x = x / 4;  // 6

// 비교 연산자
console.log(5 == "5"); // true (값만 비교)
console.log(5 === "5"); // false (값과 타입 모두 비교)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(7 > 5); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(6 <= 5); // false

// 논리 연산자
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// 삼항 연산자
const age = 20;
const status = age >= 18 ? "성인" : "미성년자";
console.log(status); // 성인

// ============================================================
// 3. 제어 구조
// ============================================================

// 조건문 - if, else
const hour = 14;

if (hour < 12) {
  console.log("좋은 아침입니다!");
} else if (hour < 18) {
  console.log("좋은 오후입니다!");
} else {
  console.log("좋은 저녁입니다!");
}

// switch 문
const day = "월요일";

switch (day) {
  case "월요일":
    console.log("한 주의 시작입니다.");
    break;
  case "금요일":
    console.log("주말이 곧 옵니다!");
    break;
  case "토요일":
  case "일요일":
    console.log("주말입니다!");
    break;
  default:
    console.log("평일입니다.");
}

// for 반복문
for (let i = 0; i < 5; i++) {
  console.log(`반복 ${i + 1}번째`);
}

// while 반복문
let count = 0;
while (count < 3) {
  console.log(`while 반복: ${count + 1}`);
  count++;
}

// do-while 반복문 (최소한 한 번은 실행)
let doCount = 0;
do {
  console.log(`do-while 반복: ${doCount + 1}`);
  doCount++;
} while (doCount < 3);

// for...in 반복문 (객체의 속성 순회)
const person = { name: "Alice", age: 25, job: "Developer" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...of 반복문 (이터러블 객체 순회)
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// 예외 처리
try {
  // 오류 발생시키기
  throw new Error("의도적인 오류 발생");
} catch (error) {
  console.log("오류 발생:", error.message);
} finally {
  console.log("이 코드는 항상 실행됩니다.");
}

// ============================================================
// 4. 함수
// ============================================================

// 함수 선언
function greet(name) {
  return `안녕하세요, ${name}님!`;
}

console.log(greet("John")); // 안녕하세요, John님!

// 함수 표현식
const sayHello = function (name) {
  return `Hello, ${name}!`;
};

console.log(sayHello("Jane")); // Hello, Jane!

// 화살표 함수 (ES6+)
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 기본 매개변수 (ES6+)
const greetWithDefault = (name = "익명") => `안녕하세요, ${name}님!`;
console.log(greetWithDefault()); // 안녕하세요, 익명님!
console.log(greetWithDefault("Alice")); // 안녕하세요, Alice님!

// 클로저 예제
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 콜백 함수
function processData(data, callback) {
  // 데이터 처리
  const processed = `처리된: ${data}`;
  // 처리 후 콜백 실행
  callback(processed);
}

processData("원본 데이터", function (result) {
  console.log(result); // 처리된: 원본 데이터
});

// ============================================================
// 5. 객체와 배열
// ============================================================

// 객체 생성
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  // 메서드 정의
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

// 객체 속성 접근
console.log(user.firstName); // John
console.log(user["lastName"]); // Doe

// 메서드 호출
console.log(user.getFullName()); // John Doe

// 객체 속성 추가 및 수정
user.email = "john@example.com";
user.age = 31;

// 객체 속성 삭제
delete user.email;

// 프로토타입과 상속
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Dog 프로토타입을 Animal 프로토타입에 연결
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog 프로토타입 메서드 오버라이드
Dog.prototype.speak = function () {
  return `${this.name} barks`;
};

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // Rex barks

// 배열 생성
const fruits = ["사과", "바나나", "오렌지"];

// 배열 요소 접근
console.log(fruits[0]); // 사과

// 배열 메서드
fruits.push("딸기"); // 배열 끝에 요소 추가
fruits.pop(); // 배열 끝 요소 제거
fruits.unshift("망고"); // 배열 시작에 요소 추가
fruits.shift(); // 배열 시작 요소 제거

// 유용한 배열 메서드
const numbers = [1, 2, 3, 4, 5];

// map: 각 요소를 변환하여 새 배열 반환
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: 조건에 맞는 요소만 새 배열로 반환
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: 배열의 요소를 하나의 값으로 축소
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2); // 15

// slice: 배열의 부분을 새 배열로 반환
const sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]

// splice: 배열에서 요소를 제거하거나 대체하거나 추가
const spliced = [...numbers]; // 복사본 생성
spliced.splice(2, 1, 10); // 인덱스 2부터 1개 요소를 제거하고 10 삽입
console.log(spliced); // [1, 2, 10, 4, 5]

// ============================================================
// 6. DOM 조작 (브라우저 환경에서만 작동)
// ============================================================

/*
// 요소 선택
const heading = document.getElementById("heading");
const paragraphs = document.getElementsByTagName("p");
const buttons = document.getElementsByClassName("btn");
const firstButton = document.querySelector(".btn");
const allButtons = document.querySelectorAll(".btn");

// 요소 내용 수정
heading.textContent = "새 제목";
heading.innerHTML = "<span>HTML을 포함한 새 제목</span>";

// 요소 스타일 변경
heading.style.color = "blue";
heading.style.backgroundColor = "yellow";

// 클래스 추가/제거
heading.classList.add("highlight");
heading.classList.remove("old-class");
heading.classList.toggle("visible");

// 새 요소 생성 및 추가
const newParagraph = document.createElement("p");
newParagraph.textContent = "동적으로 생성된 단락입니다.";
document.body.appendChild(newParagraph);

// 이벤트 처리
const button = document.querySelector("button");
button.addEventListener("click", function(event) {
  alert("버튼이 클릭되었습니다!");
});
*/

// ============================================================
// 7. 비동기 프로그래밍
// ============================================================

// 콜백을 사용한 비동기 처리
console.log("시작");

setTimeout(function () {
  console.log("2초 후 실행");
}, 2000);

console.log("종료"); // "시작", "종료", "2초 후 실행" 순서로 출력됨

// 콜백 지옥 예제
/*
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getFinalData(c, function(result) {
        console.log("결과:", result);
      });
    });
  });
});
*/

// Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("데이터 가져오기 성공!");
      } else {
        reject("오류: 데이터를 가져올 수 없습니다.");
      }
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
    return "처리된 " + data;
  })
  .then((processedData) => {
    console.log(processedData);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("처리 완료");
  });

// async/await (ES8+)
async function fetchDataAsync() {
  try {
    // await는 async 함수 내에서만 사용 가능
    const data = await fetchData();
    console.log("async/await로 가져온 데이터:", data);
    return "처리 완료";
  } catch (error) {
    console.error("async/await 오류:", error);
  }
}

fetchDataAsync().then((result) => {
  console.log(result);
});

// fetch API (브라우저 환경에서만 작동)
/*
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 응답이 정상이 아닙니다');
    }
    return response.json();
  })
  .then(data => {
    console.log('가져온 데이터:', data);
  })
  .catch(error => {
    console.error('Fetch 오류:', error);
  });
*/

// ============================================================
// 8. ES6+ 주요 기능
// ============================================================

// 템플릿 리터럴
const username = "John";
const greeting = `안녕하세요, ${username}님!`;
console.log(greeting);

// 여러 줄 문자열
const multiline = `첫 번째 줄
두 번째 줄
세 번째 줄`;
console.log(multiline);

// 구조 분해 할당 - 객체
const personObj = {
  name: "Alice",
  age: 25,
  job: "Developer",
  address: {
    city: "Seoul",
    country: "Korea",
  },
};

const { name, age: personAge, job } = personObj;
console.log(name, personAge, job); // Alice 25 Developer

// 중첩된 객체 구조 분해
const {
  address: { city, country },
} = personObj;
console.log(city, country); // Seoul Korea

// 기본값 설정
const { hobby = "없음" } = personObj;
console.log(hobby); // 없음

// 구조 분해 할당 - 배열
const rgb = [255, 200, 100];
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255 200 100

// 나머지 요소 가져오기 (Rest 문법)
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// 스프레드 연산자 - 배열
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 스프레드 연산자 - 객체
const defaultSettings = {
  theme: "light",
  fontSize: 16,
  showSidebar: true,
};

const userSettings = {
  theme: "dark",
  fontSize: 14,
};

const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);
// { theme: "dark", fontSize: 14, showSidebar: true }

// 기본 매개변수
function createUser(name, age = 18, country = "Unknown") {
  return { name, age, country };
}

console.log(createUser("Bob"));
// { name: "Bob", age: 18, country: "Unknown" }
console.log(createUser("Charlie", 25, "USA"));
// { name: "Charlie", age: 25, country: "USA" }

// 클래스 문법 (ES6+)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `안녕하세요, 제 이름은 ${this.name}이고 ${this.age}살입니다.`;
  }

  // 정적 메서드
  static isAdult(age) {
    return age >= 18;
  }
}

const alice = new Person("Alice", 28);
console.log(alice.greet()); // 안녕하세요, 제 이름은 Alice이고 28살입니다.
console.log(Person.isAdult(alice.age)); // true

// 상속
class Employee extends Person {
  constructor(name, age, company) {
    super(name, age); // 부모 클래스 생성자 호출
    this.company = company;
  }

  greet() {
    return `${super.greet()} ${this.company}에서 일하고 있습니다.`;
  }
}

const bob = new Employee("Bob", 35, "ABC Corp");
console.log(bob.greet());
// 안녕하세요, 제 이름은 Bob이고 35살입니다. ABC Corp에서 일하고 있습니다.

// 모듈 시스템 (브라우저나 Node.js 환경에서 사용)
/*
  // math.js
  export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export const PI = 3.14159;
  
  // main.js
  import { add, subtract, PI } from './math.js';
  console.log(add(5, 3));  // 8
  console.log(subtract(10, 4));  // 6
  console.log(PI);  // 3.14159
  
  // 모든 것을 가져와서 namespace로 사용
  import * as math from './math.js';
  console.log(math.add(5, 3));  // 8
  */

// ============================================================
// 9. 스코프와 실행 컨텍스트
// ============================================================

// 전역 스코프
const globalVar = "나는 전역 변수입니다";

function testScope() {
  // 함수 스코프
  const funcVar = "나는 함수 스코프 변수입니다";
  console.log(globalVar); // 전역 변수에 접근 가능

  if (true) {
    // 블록 스코프 (let, const)
    let blockVar = "나는 블록 스코프 변수입니다";
    var funcScopedVar = "나는 함수 스코프를 가진 var 변수입니다";
    console.log(funcVar); // 함수 변수에 접근 가능
    console.log(blockVar); // 블록 내에서 접근 가능
  }

  // console.log(blockVar);     // 오류: blockVar는 블록 밖에서 접근 불가
  console.log(funcScopedVar); // var로 선언했기 때문에 블록 밖에서도 접근 가능
}

testScope();
// console.log(funcVar);  // 오류: 함수 밖에서 함수 변수에 접근 불가

// 렉시컬 스코프 (정적 스코프)
function outer() {
  const outerVar = "외부 함수 변수";

  function inner() {
    const innerVar = "내부 함수 변수";
    console.log(outerVar); // 외부 함수의 변수에 접근 가능
  }

  inner();
  // console.log(innerVar);  // 오류: 내부 함수의 변수에 접근 불가
}

outer();

// 호이스팅
console.log(hoistedVar); // undefined (선언은 호이스팅되지만 초기화는 안됨)
var hoistedVar = "나는 호이스팅됩니다";

// 함수 선언식은 완전히 호이스팅됨
console.log(hoistedFunction()); // "호이스팅된 함수"
function hoistedFunction() {
  return "호이스팅된 함수";
}

// 함수 표현식은 변수 선언만 호이스팅됨
// console.log(notHoistedFunction());  // 오류: notHoistedFunction is not a function
var notHoistedFunction = function () {
  return "호이스팅되지 않은 함수";
};

// let과 const는 호이스팅되지만 TDZ(Temporal Dead Zone)로 인해 초기화 전 접근 불가
// console.log(letVar);  // 오류: Cannot access 'letVar' before initialization
let letVar = "let은 TDZ의 영향을 받습니다";

// ============================================================
// 10. 이벤트 루프와 비동기 동작
// ============================================================

// 싱글 스레드와 이벤트 루프 예제
console.log("1. 스크립트 시작");

// 타이머는 Web API에 의해 처리되고 콜백 큐에 들어감
setTimeout(() => {
  console.log("4. 타이머 완료 (0ms 지정했지만 나중에 실행)");
}, 0);

// 프로미스 콜백은 마이크로태스크 큐에 들어감 (콜백 큐보다 우선순위 높음)
Promise.resolve().then(() => {
  console.log("3. 프로미스 실행 (마이크로태스크)");
});

console.log("2. 스크립트 종료");

// 출력 순서: 1 -> 2 -> 3 -> 4
// 이유:
// 1. 동기 코드인 console.log가 먼저 실행됨
// 2. setTimeout은 Web API로 보내지고 0ms 후에 콜백 큐에 들어감
// 3. Promise의 콜백은 마이크로태스크 큐에 들어감
// 4. 콜 스택이 비면 먼저 마이크로태스크 큐를 확인하고 실행
// 5. 그 다음 콜백 큐를 확인하고 setTimeout 콜백 실행

// ============================================================
// 11. 응용 예제들
// ============================================================

// 딥 카피 vs 얕은 카피
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original }; // 얕은 복사
const deepCopy = JSON.parse(JSON.stringify(original)); // 딥 카피 (제한적)

original.b.c = 3;
console.log(shallowCopy.b.c); // 3 (얕은 복사는 중첩 객체 참조를 공유)
console.log(deepCopy.b.c); // 2 (딥 카피는 모든 중첩 객체를 새로 생성)

// 커링 (함수형 프로그래밍)
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 메모이제이션 (함수 결과 캐싱)
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("캐시된 결과 사용");
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalculation = (n) => {
  console.log(`${n}에 대한 계산 실행`);
  return n * n;
};

const memoizedCalc = memoize(expensiveCalculation);
console.log(memoizedCalc(4)); // "4에 대한 계산 실행" 출력 후 16
console.log(memoizedCalc(4)); // "캐시된 결과 사용" 출력 후 16
console.log(memoizedCalc(5)); // "5에 대한 계산 실행" 출력 후 25

// 제너레이터 함수 (ES6+)
function* countGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const counter2 = countGenerator();
console.log(counter2.next().value); // 1
console.log(counter2.next().value); // 2
console.log(counter2.next().value); // 3
console.log(counter2.next().done); // true

// 비동기 제너레이터
function* asyncSequence() {
  const result1 = yield Promise.resolve("첫 번째 결과");
  console.log(result1);
  const result2 = yield Promise.resolve("두 번째 결과");
  console.log(result2);
  return "완료";
}

// 제너레이터 실행 도우미 함수
function runGenerator(generator) {
  const iterator = generator();

  function handle(yielded) {
    if (yielded.done) return Promise.resolve(yielded.value);

    return Promise.resolve(yielded.value)
      .then((data) => handle(iterator.next(data)))
      .catch((error) => handle(iterator.throw(error)));
  }

  return handle(iterator.next());
}

runGenerator(asyncSequence).then((result) => {
  console.log("최종 결과:", result);
});

// ES6+ 컬렉션 API
// Map
const userMap = new Map();
userMap.set("user1", { name: "Alice", age: 25 });
userMap.set("user2", { name: "Bob", age: 30 });

console.log(userMap.get("user1")); // { name: "Alice", age: 25 }
console.log(userMap.has("user3")); // false
console.log(userMap.size); // 2

// Set
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]
uniqueNumbers.add(6);
uniqueNumbers.delete(2);
console.log(uniqueNumbers.has(2)); // false
console.log(uniqueNumbers.size); // 5

// WeakMap과 WeakSet
// 약한 참조를 가지고 있어 가비지 컬렉션을 방해하지 않음
