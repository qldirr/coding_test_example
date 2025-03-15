// 1. completed 값이 true인 할 일만 반환하는 함수를 작성하세요.
const todos = [
  { id: 1, title: "운동하기", completed: false },
  { id: 2, title: "코딩 공부하기", completed: true },
  { id: 3, title: "책 읽기", completed: false },
  { id: 4, title: "요리하기", completed: true },
];

function getCompletedTodos(todoList) {
  return todoList.filter((todo) => todo.completed);
}

console.log(getCompletedTodos(todos));
// 출력: [{ id: 2, title: "코딩 공부하기", completed: true }, { id: 4, title: "요리하기", completed: true }]

// 2. 할 일 목록을 제목(title) 기준으로 오름차순 정렬하는 함수를 작성하세요.
function sortTodosByTitle(todoList) {
  return todoList.slice().sort((a, b) => a.title.localeCompare(b.title));
}

console.log(sortTodosByTitle(todos));

// 3. 사용자가 입력한 키워드가 제목에 포함된 할 일 목록을 반환하는 함수를 작성하세요.
function searchTodos(todoList, keyword) {
  return todoList.filter((todo) => todo.title.includes(keyword));
}

console.log(searchTodos(todos, "공부"));
// 출력: [{ id: 2, title: "코딩 공부하기", completed: true }]

// 4. 중복된 제목을 가진 할 일을 제거하는 함수를 작성하세요.
const todosWithDuplicates = [
  { id: 1, title: "운동하기", completed: false },
  { id: 2, title: "코딩 공부하기", completed: true },
  { id: 3, title: "운동하기", completed: false }, // 중복
];

function removeDuplicateTodos(todoList) {
  const seen = new Set();
  return todoList.filter((todo) => {
    if (seen.has(todo.title)) return false;
    seen.add(todo.title);
    return true;
  });
}

console.log(removeDuplicateTodos(todosWithDuplicates));
// 출력: [{ id: 1, title: "운동하기", completed: false }, { id: 2, title: "코딩 공부하기", completed: true }]

// 5. 모든 할 일을 완료 상태로 변경하는 함수를 작성하세요.
function completeAllTodos(todoList) {
  return todoList.map((todo) => ({ ...todo, completed: true }));
}

console.log(completeAllTodos(todos));
