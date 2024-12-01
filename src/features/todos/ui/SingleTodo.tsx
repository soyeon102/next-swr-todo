"use client";

import { IconTrash, IconCheckbox, IconCheckboxEmpty } from "@/shared/ui/icons";
import { TodoType } from "../model/todo.type";
import useTodoHook from "../model/useTodoHook";

interface SingleTodo {
  todo: TodoType;
}

export default function SingleTodo({ todo }: SingleTodo) {
  const { updateTodoMutation, deleteTodoMutation } = useTodoHook();

  return (
    <article className="p-4 flex justify-between items-center border bg-slate-700 rounded-md">
      <div className="flex justify-start items-center flex-1">
        <input
          type="checkbox"
          name="todo"
          id={String(todo.id)}
          checked={todo.completed}
          onChange={() =>
            updateTodoMutation({ ...todo, completed: !todo.completed })
          }
          className="hidden"
        />
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              updateTodoMutation({ ...todo, completed: !todo.completed })
            }
          >
            {todo.completed ? <IconCheckboxEmpty /> : <IconCheckbox />}
          </button>
          <label htmlFor={String(todo.id)}>{todo.todo}</label>
        </div>
      </div>
      <button onClick={() => deleteTodoMutation(todo.id)}>
        <IconTrash />
      </button>
    </article>
  );
}
