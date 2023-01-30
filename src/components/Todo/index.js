import { actions } from "../../actions";

export const Todo = ({ id, title, dueDate, isDone }) => {
  const li = document.createElement("li");
  li.classList.add("cursor-pointer");
  li.classList.add("capitalize");
  li.id = id;
  if (isDone) {
    li.classList.add("line-through");
  }
  li.innerHTML = `<input type="checkbox" value="${isDone}" ${
    isDone ? "checked" : "not-checked"
  } disabled/> ${title}`;

  li.addEventListener("click", (e) => {
    actions.updateTodo(id);
  });

  return li;
};
