"use client";

import { IconTrash, IconCheckbox, IconCheckboxEmpty } from "@/shared/ui/icons";
import { TodoType } from "../model/todo.type";

interface SingleTodo {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function SingleTodo({ todo, onToggle, onDelete }: SingleTodo) {
  return (
    <article className="p-4 flex justify-between items-center border bg-slate-700 rounded-md">
      <div className="flex justify-start items-center flex-1">
        <input
          type="checkbox"
          name="todo"
          id={String(todo.id)}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="hidden"
        />
        <div className="flex items-center gap-2">
          <button onClick={() => onToggle(todo.id)}>
            {todo.completed ? <IconCheckboxEmpty /> : <IconCheckbox />}
          </button>
          <label htmlFor={String(todo.id)}>{todo.todo}</label>
        </div>
      </div>
      <button onClick={() => onDelete(todo.id)}>
        <IconTrash />
      </button>
    </article>
  );
}
