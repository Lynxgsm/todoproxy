import { states } from "../states";

export const TodoActions = {
  addTodo: (title, dueDate) => {
    states.todos = [
      ...states.todos,
      {
        id: states.todos.length + 1,
        title,
        dueDate,
        isDone: false,
      },
    ].sort((a, b) => {
      console.log(b.dueDate, a.dueDate);
      return b.dueDate - a.dueDate;
    });
  },
  updateTodo: (id) => {
    const todo = states.todos.findIndex((todo) => todo.id == id);
    const todos = [...states.todos];

    if (todo >= 0) {
      todos[todo].isDone = !todos[todo].isDone;
      states.todos = todos;
    }
  },
};
