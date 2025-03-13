// 1. 조건문 (Conditional Statements)

// if 문
console.log("===== if 문 =====");
let score = 85;

if (score >= 90) {
  console.log("A 등급입니다.");
} else if (score >= 80) {
  console.log("B 등급입니다.");
} else if (score >= 70) {
  console.log("C 등급입니다.");
} else {
  console.log("D 등급입니다.");
}

// switch 문
console.log("\n===== switch 문 =====");
let day = new Date().getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

switch (day) {
  case 0:
    console.log("오늘은 일요일입니다.");
    break;
  case 1:
    console.log("오늘은 월요일입니다.");
    break;
  case 2:
    console.log("오늘은 화요일입니다.");
    break;
  case 3:
    console.log("오늘은 수요일입니다.");
    break;
  case 4:
    console.log("오늘은 목요일입니다.");
    break;
  case 5:
    console.log("오늘은 금요일입니다.");
    break;
  case 6:
    console.log("오늘은 토요일입니다.");
    break;
  default:
    console.log("날짜 정보가 잘못되었습니다.");
}

// 삼항 연산자 (Ternary Operator)
console.log("\n===== 삼항 연산자 =====");
let age = 20;
let status = age >= 18 ? "성인" : "미성년자";
console.log(`당신은 ${status}입니다.`);

// 2. 반복문 (Loops)

// for 반복문
console.log("\n===== for 반복문 =====");
for (let i = 1; i <= 5; i++) {
  console.log(`for 반복문: ${i}번째 실행`);
}

// while 반복문
console.log("\n===== while 반복문 =====");
let count = 1;
while (count <= 5) {
  console.log(`while 반복문: ${count}번째 실행`);
  count++;
}

// do-while 반복문
console.log("\n===== do-while 반복문 =====");
let num = 1;
do {
  console.log(`do-while 반복문: ${num}번째 실행`);
  num++;
} while (num <= 5);

// break와 continue
console.log("\n===== break와 continue =====");
// break 예제
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("break: 반복문 종료");
    break;
  }
  console.log(`break 예제: ${i}`);
}

// continue 예제
console.log("\n----- continue 예제 -----");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // 짝수면 건너뛰기
  }
  console.log(`continue 예제 (홀수만 출력): ${i}`);
}

// for...of 반복문 (배열)
console.log("\n===== for...of 반복문 =====");
const fruits = ["사과", "바나나", "딸기", "오렌지", "포도"];
for (const fruit of fruits) {
  console.log(`과일: ${fruit}`);
}

// for...in 반복문 (객체)
console.log("\n===== for...in 반복문 =====");
const person = {
  name: "김철수",
  age: 25,
  job: "개발자",
  city: "서울",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// forEach 메서드 (배열)
console.log("\n===== forEach 메서드 =====");
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((number, index) => {
  console.log(`인덱스 ${index}: ${number}`);
});

// map 메서드 (배열 변환)
console.log("\n===== map 메서드 =====");
const doubled = numbers.map((number) => number * 2);
console.log("원본 배열:", numbers);
console.log("2배로 변환된 배열:", doubled);

// filter 메서드 (배열 필터링)
console.log("\n===== filter 메서드 =====");
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("원본 배열:", numbers);
console.log("짝수만 필터링된 배열:", evenNumbers);
