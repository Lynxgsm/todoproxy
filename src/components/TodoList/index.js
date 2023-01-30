import { states } from "../../states";
import { Todo } from "../Todo";

export const TodoList = (element) => {
  document.querySelectorAll("li").forEach((li) => li.remove());
  states.todos.forEach((todo) => {
    document.querySelector(element).appendChild(Todo(todo));
  });
};
