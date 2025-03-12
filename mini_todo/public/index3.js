import axios from "axios";

const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector(".todoInput");
const todoForm = document.getElementById("todo-form");
const addBtn = document.getElementById("add-btn");

// ✅ 백엔드 API URL 설정
const API_URL = "http://localhost:8080/api/todos";

// ✅ 초기 데이터 가져오기
window.addEventListener("DOMContentLoaded", loadTodos);

async function loadTodos() {
  try {
    const response = await axios.get(API_URL);
    renderTodos(response.data);
  } catch (error) {
    console.error("Failed to load todos:", error);
  }
}

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

    todoList.style.listStyle = "none";
    delBtn.innerText = "X";
    delBtn.className = "delete-btn";

    span.textContent = todo.title;

    // ✅ 완료된 경우 스타일 적용
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

// ✅ 할 일 추가
async function addTodo() {
  const newTodoText = todoInput.value.trim();

  if (newTodoText !== "") {
    try {
      const newTodo = {
        title: newTodoText,
        completed: false,
      };

      // 🔥 POST 요청 (할 일 추가)
      await axios.post(API_URL, newTodo);
      loadTodos(); // 목록 새로고침

      todoInput.value = "";
      todoInput.focus();
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  }
}

// ✅ 할 일 삭제
async function deleteTodo(button) {
  const li = button.parentElement;
  const id = li.dataset.id;

  try {
    // 🔥 DELETE 요청 (할 일 삭제)
    await axios.delete(`${API_URL}/${id}`);
    loadTodos(); // 목록 새로고침
  } catch (error) {
    console.error("Failed to delete todo:", error);
  }
}

// ✅ 할 일 완료 상태 토글
async function toggleTodoComplete(checkbox) {
  const li = checkbox.parentElement;
  const id = li.dataset.id;
  const span = checkbox.nextElementSibling;

  try {
    // ✅ 완료 상태 토글
    const updatedTodo = {
      completed: checkbox.checked,
    };

    // 🔥 PATCH 요청 (할 일 상태 수정)
    await axios.patch(`${API_URL}/${id}`, updatedTodo);
    loadTodos(); // 목록 새로고침
  } catch (error) {
    console.error("Failed to update todo:", error);
  }
}

// ✅ 이벤트 핸들러 연결
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

todoList.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "BUTTON") {
    deleteTodo(target);
  }

  if (target.type === "checkbox") {
    toggleTodoComplete(target);
  }
});
