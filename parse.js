export const parseTodos = callback => {
  const todoFields = document.querySelectorAll(".todo-list li");
  todoFields.forEach(todoField => {
    const title = todoField.querySelector("label").innerText;
    const completed = todoField.querySelector(".toggle").checked;

    callback(title, completed);
  });
};

export const parseFilter = callback => {
  const filterFields = document.querySelectorAll(".filters a");
  filterFields.forEach(filterField => {
    const filter = filterField.innerText.toLowerCase();

    callback(filter);
  });
};
