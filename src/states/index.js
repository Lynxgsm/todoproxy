import { footer, taskInput } from "../App";
import { Footer } from "../components/Footer";
import { TodoList } from "../components/TodoList";
import { TodoStates } from "./todos";

const handler = {
  set: function (obj, prop, value) {
    obj[prop] = value;
    TodoList("#todolist");
    taskInput.focus();
    footer.innerHTML = Footer();
    return true;
  },
};

export const states = new Proxy({ ...TodoStates, invalidDate: false }, handler);
