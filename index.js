import { todos, addTodo, toggleTodo } from "./functions";
import { parseTodos, parseFilter } from "./parse";
import { todoTemplate3 } from "./templates";

const filters = [];
let selectedFilter = "";

// парсим данные из DOM
const addTodoField = document.querySelector(".new-todo");
parseTodos(addTodo);
parseFilter((filter, selected) => {
  filters.push(filter);

  if (selected) {
    selectedFilter = filter;
  }
});

// работаем с данными
console.log(addTodoField.value, todos, filters, selectedFilter);

const renderTodos = todos => {
  const todosUL = document.querySelector(".todo-list");
  todosUL.innerHTML = "";

  todos.forEach(todo => {
    todosUL.appendChild(todoTemplate3(todo));
  });
};

addTodo({
  title: "Todo 4"
});

renderTodos(todos);

setTimeout(() => {
  toggleTodo("2");
  renderTodos(todos);
}, 3000);

// setTimeout(() => {
//   addTodo({
//     title: "Todo 4"
//   });

//   toggleTodo("2");
//   toggleTodo("1");

//   console.log(todos);

//   renderTodos(todos);
// }, 2000);
