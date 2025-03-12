const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector(".todoInput");
const todoForm = document.getElementById("todo-form");
const addBtn = document.getElementById("add-btn");

// 초기 샘플 데이터
const initialTodos = [
  { id: 1, title: "아침 운동하기", completed: false },
  { id: 2, title: "프로젝트 계획 세우기", completed: true },
  { id: 3, title: "이메일 확인하기", completed: false },
  { id: 4, title: "회의 준비하기", completed: false },
  { id: 5, title: "보고서 작성하기", completed: true },
];

// DOM 내용이 완전히 로드되었을 때 초기화
window.addEventListener("DOMContentLoaded", () => {
  // 로컬 스토리지에서 할 일 목록 가져오기
  const savedTodos = localStorage.getItem("todos");

  // 로컬 스토리지에 데이터가 있으면 그것을 사용, 없으면 초기 데이터 사용
  const todos = savedTodos ? JSON.parse(savedTodos) : initialTodos;

  // 할 일 목록 표시
  renderTodos(todos);

  // 로컬 스토리지에 초기 데이터 저장 (처음 실행 시)
  if (!savedTodos) {
    localStorage.setItem("todos", JSON.stringify(initialTodos));
  }
});

// 이벤트 리스너 추가
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodo();
  }
});

// 이벤트 위임을 사용하여 삭제 및 체크박스 이벤트 처리
todoList.addEventListener("click", (e) => {
  const target = e.target;

  // 삭제 버튼 클릭 처리
  if (target.tagName === "BUTTON") {
    deleteTodo(target);
  }

  // 체크박스 클릭 처리
  if (target.type === "checkbox") {
    toggleTodoComplete(target);
  }
});

// 할 일 목록 렌더링
function renderTodos(todos) {
  // 기존 목록 비우기
  todoList.innerHTML = "";

  // 할 일 항목 추가
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkbox = document.createElement("input");

    li.dataset.id = todo.id;
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;

    todoList.style.listStyle = "none";
    delBtn.innerText = "X";
    delBtn.className = "delete-btn";

    span.textContent = todo.title;

    // 완료된 할 일에 스타일 적용
    if (todo.completed) {
      span.style.textDecoration = "line-through";
      span.style.color = "#888";
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

// 로컬 스토리지에서 할 일 목록 가져오기
function getTodos() {
  const todosJSON = localStorage.getItem("todos");
  return todosJSON ? JSON.parse(todosJSON) : [];
}

// 로컬 스토리지에 할 일 목록 저장
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 할 일 추가
function addTodo() {
  const newTodoText = todoInput.value.trim();

  if (newTodoText !== "") {
    // 현재 할 일 목록 가져오기
    const todos = getTodos();

    // 새 ID 생성 (기존 ID 중 가장 큰 값 + 1)
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

    // 새 할 일 객체 생성
    const newTodo = {
      id: newId,
      title: newTodoText,
      completed: false,
    };

    // 할 일 목록에 추가
    todos.push(newTodo);

    // 로컬 스토리지에 저장
    saveTodos(todos);

    // 목록 다시 렌더링
    renderTodos(todos);

    // 입력 필드 초기화
    todoInput.value = "";
    todoInput.focus();
  }
}

// 할 일 삭제
function deleteTodo(button) {
  const li = button.parentElement;
  const id = parseInt(li.dataset.id);

  // 현재 할 일 목록 가져오기
  let todos = getTodos();

  // ID로 할 일 필터링
  todos = todos.filter((todo) => todo.id !== id);

  // 로컬 스토리지에 저장
  saveTodos(todos);

  // 목록 다시 렌더링
  renderTodos(todos);
}

// 할 일 완료 상태 토글
function toggleTodoComplete(checkbox) {
  const li = checkbox.parentElement;
  const id = parseInt(li.dataset.id);
  const span = checkbox.nextElementSibling;

  // 현재 할 일 목록 가져오기
  let todos = getTodos();

  // ID로 할 일 찾기
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex !== -1) {
    // 완료 상태 토글
    todos[todoIndex].completed = checkbox.checked;

    // 로컬 스토리지에 저장
    saveTodos(todos);

    // 완료 상태에 따른 스타일 변경
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "#888";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "inherit";
    }
  }
}
