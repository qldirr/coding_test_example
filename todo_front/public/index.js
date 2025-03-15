// Todo list 를 <form> 태그 사용한 버전
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector(".todoInput");
const todoForm = document.getElementById("todo-form");
const addBtn = document.getElementById("add-btn");

// DOM 내용이 완전히 로드되었을 때 getTodos 함수 실행
window.addEventListener("DOMContentLoaded", () => {
  getTodos();
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

// 초기 Todo 목록 불러오기
function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => {
      const getTodoList = json.slice(0, 10);
      for (let i = 0; i < getTodoList.length; i++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const delBtn = document.createElement("button");
        const checkbox = document.createElement("input");

        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = getTodoList[i].completed;

        todoList.style.listStyle = "none";
        delBtn.innerText = "X";
        delBtn.className = "delete-btn";

        span.textContent = getTodoList[i].title;

        // 완료된 할 일에 스타일 적용
        if (getTodoList[i].completed) {
          span.style.textDecoration = "line-through";
          span.style.color = "#888";
        }

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        todoList.appendChild(li);
      }
    })
    .catch((error) =>
      console.error("할 일을 불러오는데 오류가 발생했습니다:", error)
    );
}

// Todo 추가
function addTodo() {
  const newTodo = todoInput.value.trim();

  if (newTodo !== "") {
    const newTodoLi = document.createElement("li");
    const newDelBtn = document.createElement("button");
    const newSpan = document.createElement("span");
    const checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    newDelBtn.innerText = "X";
    newDelBtn.className = "delete-btn";
    newSpan.textContent = newTodo;

    newTodoLi.appendChild(checkbox);
    newTodoLi.appendChild(newSpan);
    newTodoLi.appendChild(newDelBtn);
    todoList.appendChild(newTodoLi);

    todoInput.value = "";
    todoInput.focus();
  }
}

// Todo 삭제
function deleteTodo(button) {
  const li = button.parentElement;
  todoList.removeChild(li);
}

// Todo 완료
function toggleTodoComplete(checkbox) {
  const span = checkbox.nextElementSibling;

  if (checkbox.checked) {
    span.style.textDecoration = "line-through";
    span.style.color = "#888";
  } else {
    span.style.textDecoration = "none";
    span.style.color = "inherit";
  }
}
