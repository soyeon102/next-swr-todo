import { TodoType } from "../model/todo.type";

const addTodoOptions = (newTodo: TodoType) => {
  return {
    optimisticData: (todos: TodoType[]) =>
      [...todos, newTodo].sort((a, b) => b.id - a.id),
    populateCache: (added: TodoType, todos: TodoType[]) =>
      [...todos, added].sort((a, b) => b.id - a.id),
    rollbackOnError: true,
    revalidate: false,
  };
};

const updateTodoOptions = (updateTodo: TodoType) => {
  return {
    optimisticData: (todos: TodoType[]) => {
      const prevTodos = todos.filter((item) => item.id !== updateTodo.id);
      return [...prevTodos, updateTodo].sort((a, b) => b.id - a.id);
    },
    populateCache: (updated: TodoType, todos: TodoType[]) => {
      const prevTodos = todos.filter((item) => item.id !== updated.id);
      return [...prevTodos, updated].sort((a, b) => b.id - a.id);
    },
    rollbackOnError: true,
    revalidate: false,
  };
};

const deleteTodoOptions = (id: number) => {
  return {
    optimisticData: (todos: TodoType[]) =>
      todos.filter((item) => item.id !== id),
    populateCache: (_: any, todos: TodoType[]) =>
      todos.filter((item) => item.id !== id),
    rollbackOnError: true,
    revalidate: false,
  };
};

export { addTodoOptions, updateTodoOptions, deleteTodoOptions };
