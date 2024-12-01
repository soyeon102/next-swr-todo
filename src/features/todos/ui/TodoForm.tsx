"use client";

import { useState } from "react";
import { TodoType } from "../model/todo.type";
import useTodoHook from "../model/useTodoHook";
import { IconAdd } from "@/shared/ui/icons/IconAdd";

export default function TodoForm() {
  const { addTodoMutation, todos } = useTodoHook();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId =
      todos.length > 0
        ? Math.max(...todos.map((todo: TodoType) => todo.id)) + 1
        : 1;

    addTodoMutation({
      id: newId,
      userId: 1,
      todo: newTodo,
      completed: false,
    }).then();

    setNewTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-slate-400 mb-5 rounded-md flex justify-between items-center"
    >
      <div className="flex-1 mr-2">
        <label
          htmlFor="new-todo"
          className="absolute -left-full translate-x-full text-gray-400"
        >
          Enter a new todo
        </label>

        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={handleChange}
          className="w-full p-2 rounded-sm text-gray-900"
          placeholder="Enter a new todo"
        />
      </div>
      <button type="submit" disabled={newTodo === ""}>
        <IconAdd />
      </button>
    </form>
  );
}
