import { todos, addTodo, toggleTodo } from "./functions";
import { parseTodos, parseFilter } from "./parse";
const filters = [];

// парсим данные из DOM
const addTodoField = document.querySelector(".new-todo");
parseTodos(addTodo);
parseFilter(filter => filters.push(filter));

// работаем с данными
console.log(addTodoField.value, todos, filters);
