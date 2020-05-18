import { todos, addTodo, toggleTodo } from "./functions";
import { parseTodos, parseFilter } from "./parse";
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
