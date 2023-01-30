import { states } from "../../states";

const colors = (amount) => {
  if (amount < 0.5) return "red";
  if (amount < 0.85) return "orange";
  return "teal";
};

export const Footer = () => {
  const todosDone = states.todos.filter((todo) => todo.isDone).length;
  const total = states.todos.length;
  return `<p class="text-right font-bold" style="color:${colors(
    todosDone / total
  )}">Task ${todosDone}/${total}</p>`;
};
