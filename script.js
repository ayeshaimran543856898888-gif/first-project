let todos = [];
let index = null;
let inputTodo = document.querySelector("#todo");

function GetTodo() {
  const todoData = inputTodo.value;

  if (index !== null) {
    var updatedTodos = todos.map((currElem, i) =>
      index === i ? todoData : currElem
    );

    todos = updatedTodos;
    RenderTodos();
  } else {
    todos.push(todoData);
    inputTodo.value = "";
    RenderTodos();
  }
}

function RenderTodos() {
  let todoList = document.querySelector(".todo-items");

  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.textContent = todos[i];
    let delButton = document.createElement("button");
    delButton.textContent = "del";
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    todoList.appendChild(li);
    todoList.appendChild(delButton);
    todoList.appendChild(editButton);

    delButton.onclick = function () {
      todos.splice(i, 1);
      console.log(todos);
      RenderTodos();
    };
    editButton.onclick = function () {
      inputTodo.value = todos[i];
      index = i;
    };
  }

  let li = document.createElement("li");
}
