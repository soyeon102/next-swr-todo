"use client";

import { useState } from "react";
import { TodoType } from "../model/todo.type";
import SingleTodo from "./SingleTodo";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      todo: "dfsd",
      userId: 1,
      completed: false,
    },
    {
      id: 2,
      todo: "TEST",
      userId: 3,
      completed: false,
    },
  ]);

  const handleToggleTodo = (id: number) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      return newTodos;
    });
  };

  const handleClickDelete = (id: number) => {
    console.log(id, "Delete");
  };

  return (
    <div className="w-full">
      <h1 className="mb-4 text-2xl">Todo List</h1>
      <TodoForm />
      <div className="flex flex-col gap-3">
        {todos.map((todo: TodoType, index) => (
          <SingleTodo
            key={index}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleClickDelete}
          />
        ))}
      </div>
    </div>
  );
}
