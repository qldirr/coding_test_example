// ✅ 1. 간단한 구구단 출력 (for문 사용)
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// ✅ 2. 특정 단 출력 함수화
function printGugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

printGugudan(3); // 3단 출력

// 특정 단의 합 구하기기
function getGugudanSum(dan) {
  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += dan * i;
  }
  return sum;
}

const result = getGugudanSum(3); // 3단의 합
console.log(`3단의 합: ${result}`);
