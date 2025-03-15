// Todo list를 로컬 스토리지에 저장
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector(".todoInput");
const addBtn = document.getElementById("add-btn");

// 초기 샘플 데이터
const initialTodos = [
  { id: 1, title: "아침 운동하기", completed: false },
  { id: 2, title: "프로젝트 계획 세우기", completed: true },
  { id: 3, title: "이메일 확인하기", completed: false },
  { id: 4, title: "회의 준비하기", completed: false },
  { id: 5, title: "보고서 작성하기", completed: true },
];

// ✅ 페이지 로드 시 로컬 스토리지에서 데이터 불러오기
window.addEventListener("DOMContentLoaded", () => {
  const savedTodos = localStorage.getItem("todos");
  const todos = savedTodos ? JSON.parse(savedTodos) : initialTodos;
  renderTodos(todos);

  if (!savedTodos) {
    localStorage.setItem("todos", JSON.stringify(initialTodos));
  }
});

// ✅ 이벤트 리스너 설정
addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodo();
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    deleteTodo(e.target);
  }
  if (e.target.type === "checkbox") {
    toggleTodoComplete(e.target);
  }
});

// ✅ 할 일 목록 렌더링
function renderTodos(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const checkbox = document.createElement("input");

    li.dataset.id = todo.id;
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;
    delBtn.innerText = "X";
    delBtn.className = "delete-btn";
    span.textContent = todo.title;

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

// ✅ 로컬 스토리지 관리 함수
function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ✅ 할 일 추가
function addTodo() {
  const newTodoText = todoInput.value.trim();
  if (newTodoText !== "") {
    const todos = getTodos();
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const newTodo = { id: newId, title: newTodoText, completed: false };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);
    todoInput.value = "";
    todoInput.focus();
  }
}

// ✅ 할 일 삭제
function deleteTodo(button) {
  const id = parseInt(button.parentElement.dataset.id);
  let todos = getTodos().filter((todo) => todo.id !== id);
  saveTodos(todos);
  renderTodos(todos);
}

// ✅ 할 일 완료 상태 변경
function toggleTodoComplete(checkbox) {
  const id = parseInt(checkbox.parentElement.dataset.id);
  let todos = getTodos();
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = checkbox.checked;
    saveTodos(todos);
    renderTodos(todos);
  }
}
