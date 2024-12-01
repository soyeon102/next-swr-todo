"use client";

import { useState } from "react";
import { TodoType } from "../model/todo.type";
import SingleTodo from "./SingleTodo";
import TodoForm from "./TodoForm";
import useTodoHook from "../model/useTodoHook";

export default function TodoList() {
  const { isLoading, error, todos } = useTodoHook();

  let content = <p></p>;
  if (isLoading) {
    content = <p>Loading..</p>;
  } else if (error) {
    content = <p>Error in fetching todos..</p>;
  } else {
    content = (
      <>
        {todos.map((todo: TodoType) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </>
    );
  }

  return (
    <div className="w-full">
      <h1 className="mb-4 text-2xl">Todo List</h1>
      <TodoForm />
      <div className="flex flex-col gap-3">{content}</div>
    </div>
  );
}
