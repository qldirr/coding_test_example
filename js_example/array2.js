// slice() - 배열의 일부분을 새 배열로 반환
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ['grapes', 'mango']

// splice() - 배열의 요소를 추가/제거/교체
const animals = ["cat", "dog", "elephant", "fish"];
animals.splice(2, 1, "bird"); // 인덱스 2부터 1개 요소 제거하고 'bird' 추가
console.log(animals); // ['cat', 'dog', 'bird', 'fish']

// sort() - 배열 요소 정렬
const unsortedNumbers = [5, 2, 8, 1, 4];
unsortedNumbers.sort(); // 기본적으로 문자열로 변환 후 정렬
console.log(unsortedNumbers); // [1, 2, 4, 5, 8]

// 숫자 정렬을 위한 비교 함수
const descendingNumbers = [5, 2, 8, 1, 4];
descendingNumbers.sort((a, b) => b - a); // 내림차순 정렬
console.log(descendingNumbers); // [8, 5, 4, 2, 1]

// indexOf() - 요소의 첫 번째 위치 찾기
console.log(fruits.indexOf("mango")); // 2

// lastIndexOf() - 요소의 마지막 위치 찾기
const repeatedFruits = ["apple", "banana", "apple", "orange"];
console.log(repeatedFruits.lastIndexOf("apple")); // 2

// includes() - 요소 포함 여부 확인
console.log(fruits.includes("banana")); // true

// join() - 배열 요소를 문자열로 합치기
console.log(fruits.join(", ")); // 'apple, grapes, mango, banana, orange'

// concat() - 배열 합치기
const moreFruits = ["pineapple", "watermelon"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'grapes', 'mango', 'banana', 'orange', 'pineapple', 'watermelon']

// 스프레드 연산자로 배열 합치기
const combinedFruits = [...fruits, ...moreFruits];
console.log(combinedFruits); // ['apple', 'grapes', 'mango', 'banana', 'orange', 'pineapple', 'watermelon']

//----------------------------------------------------------------------------------------------

// 배열 구조 분해 할당
// const [first, second, ...rest] = fruits;
// console.log(first); // 'apple'
// console.log(second); // 'grapes'
// console.log(rest); // ['mango', 'banana', 'orange']

// Array.from() - 유사 배열 객체를 배열로 변환
const arrayLike = { 0: "zero", 1: "one", 2: "two", length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray); // ['zero', 'one', 'two']

// Array.isArray() - 배열 여부 확인
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// JavaScript 구조분해할당 예제

// 1. 배열 구조분해할당
console.log("--- 배열 구조분해할당 ---");

// 기본 배열 구조분해할당
const colors = ["red", "green", "blue", "yellow", "purple"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'

// 일부 요소 건너뛰기
const [primary, , tertiary] = colors;
console.log(primary); // 'red'
console.log(tertiary); // 'blue'

// 나머지 요소 가져오기 (rest 패턴)
const [main, ...restColors] = colors;
console.log(main); // 'red'
console.log(restColors); // ['green', 'blue', 'yellow', 'purple']

// 기본값 설정하기
const incomplete = ["one", "two"];
const [first, second, third = "default"] = incomplete;
console.log(third); // 'default'

// 변수 교환하기
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5

// 함수 리턴값 구조분해
function getCoordinates() {
  return [10, 20, 30];
}
const [x, y, z] = getCoordinates();
console.log(`x: ${x}, y: ${y}, z: ${z}`); // x: 10, y: 20, z: 30

// 2. 객체 구조분해할당
console.log("\n--- 객체 구조분해할당 ---");

// 기본 객체 구조분해할당
const person = {
  name: "홍길동",
  age: 30,
  job: "개발자",
  address: {
    city: "서울",
    district: "강남",
  },
};

const { name, age } = person;
console.log(name); // '홍길동'
console.log(age); // 30

// 새로운 변수명으로 할당
const { name: fullName, job: occupation } = person;
console.log(fullName); // '홍길동'
console.log(occupation); // '개발자'

// 기본값 설정하기
const { hobby = "독서", salary = 5000 } = person;
console.log(hobby); // '독서' (기본값 사용)
console.log(salary); // 5000 (기본값 사용)

// 중첩 객체 구조분해
const {
  address: { city, district },
} = person;
console.log(city); // '서울'
console.log(district); // '강남'

// rest 패턴으로 나머지 속성 가져오기
const { name: personName, ...details } = person;
console.log(personName); // '홍길동'
console.log(details); // { age: 30, job: '개발자', address: { city: '서울', district: '강남' } }

// 3. 함수 매개변수에서 구조분해할당
console.log("\n--- 함수 매개변수에서 구조분해할당 ---");

// 객체 매개변수 구조분해
function printUserInfo({ name, age, job = "무직" }) {
  console.log(`이름: ${name}, 나이: ${age}, 직업: ${job}`);
}
printUserInfo(person); // 이름: 홍길동, 나이: 30, 직업: 개발자
printUserInfo({ name: "김철수", age: 25 }); // 이름: 김철수, 나이: 25, 직업: 무직

// 배열 매개변수 구조분해
function processValues([first, second, ...others]) {
  console.log(`첫번째: ${first}, 두번째: ${second}, 나머지: ${others}`);
}
processValues([100, 200, 300, 400, 500]); // 첫번째: 100, 두번째: 200, 나머지: 300,400,500

// 4. 중첩 구조분해할당
console.log("\n--- 중첩 구조분해할당 ---");

const company = {
  name: "TechCorp",
  departments: {
    development: {
      frontend: { count: 15, manager: "김개발" },
      backend: { count: 10, manager: "이서버" },
    },
    design: { count: 8, manager: "박디자인" },
  },
  locations: ["서울", "부산", "대전"],
};

// 복잡한 중첩 구조분해
const {
  name: companyName,
  departments: {
    development: {
      frontend: { manager: frontendManager },
      backend: { manager: backendManager },
    },
    design: { manager: designManager },
  },
  locations: [mainLocation, secondLocation],
} = company;

console.log(companyName); // 'TechCorp'
console.log(frontendManager); // '김개발'
console.log(backendManager); // '이서버'
console.log(designManager); // '박디자인'
console.log(mainLocation); // '서울'
console.log(secondLocation); // '부산'

// 5. 활용 사례
console.log("\n--- 활용 사례 ---");

// API 응답 처리
const response = {
  status: 200,
  data: {
    user: {
      id: 1234,
      profile: {
        username: "js_lover",
        email: "js@example.com",
      },
    },
    posts: [
      { id: 1, title: "JavaScript 기초" },
      { id: 2, title: "구조분해할당 마스터하기" },
    ],
  },
};

// API 응답에서 필요한 데이터만 추출
const {
  status,
  data: {
    user: {
      profile: { username, email },
    },
    posts: [firstPost, { title: secondPostTitle }],
  },
} = response;

console.log(`상태: ${status}`);
console.log(`사용자: ${username}, 이메일: ${email}`);
console.log(`첫 번째 포스트: ${firstPost.title}`);
console.log(`두 번째 포스트 제목: ${secondPostTitle}`);
