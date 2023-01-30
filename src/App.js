import { actions } from "./actions";
import { Footer } from "./components/Footer";
import { TodoList } from "./components/TodoList";
import { formatDate } from "./helpers/date.helper";
import { states } from "./states";
import "./style.css";

const App = () => {
  return `<div>
    <form class="row items-end">
        <div class="form-control">
            <label class="font-bold">Task</label>
            <input class="capitalize" required autofocus type="text" id="task"/>
        </div>
        <div class="form-control">
            <label class="font-bold">Due Date</label>
            <input class="capitalize" type="date" id="dueDate"/>
        </div>
        <button id="add" disabled="true">Add todo</button>
    </form>
    <ul id="todolist"></ul>
    <footer></footer>
  </div>`;
};

// INIT APP
const app = document.querySelector("#app");
app.innerHTML = App();

const form = document.querySelector("form");
const taskInput = document.querySelector("input");
const dueDateInput = document.querySelector('input[type="date"]');
const addButton = document.querySelector("#add");
const footer = document.querySelector("footer");

// INIT DUE DATE LOGIC
dueDateInput.value = formatDate(Date.now());
dueDateInput.addEventListener("change", (e) => {
  states.invalidDate = new Date(e.target.value) < Date.now();
  addButton.toggleAttribute("disabled", states.invalidDate);
});

// INIT BUTTON LOGIC
const disableButton = (e) => {
  addButton.toggleAttribute(
    "disabled",
    e.target.value === "" || states.invalidDate
  );
};

// INIT FORM LOGIC
form.addEventListener("submit", (e) => {
  e.preventDefault();
  actions.addTodo(taskInput.value, dueDateInput.value);
  taskInput.value = "";
  dueDateInput.value = formatDate(Date.now());
});

// INIT TASKINPUT LOGIC
taskInput.addEventListener("keydown", disableButton);
taskInput.addEventListener("keyup", disableButton);

// INIT TODOLIST
TodoList("#todolist");

// LOAD FOOTER INFORMATION
footer.innerHTML = Footer();

export { taskInput, footer };
