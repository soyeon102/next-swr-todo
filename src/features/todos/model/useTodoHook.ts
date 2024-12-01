import useSWR from "swr";
import toast from "react-hot-toast";
import { IdType, TodoType } from "./todo.type";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  todosEndPoint as cacheKey,
} from "../api/todoApi";
import {
  addTodoOptions,
  deleteTodoOptions,
  updateTodoOptions,
} from "../api/todoOption";

const useTodoHook = () => {
  const {
    data: todos,
    isLoading,
    mutate,
    error,
  } = useSWR(cacheKey, fetchTodos, {
    onSuccess: (data) => data.sort((a: TodoType, b: TodoType) => b.id - a.id),
  });

  const addTodoMutation = async (newTodo: TodoType) => {
    try {
      await mutate(addTodo(newTodo), addTodoOptions(newTodo));
      toast.success("Success! Added new todo.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (err: any) {
      toast.error(`Failed to add the new todo: ${err.message}`, {
        duration: 1000,
      });
    }
  };

  const updateTodoMutation = async (updatedTodo: TodoType) => {
    try {
      await mutate(updateTodo(updatedTodo), updateTodoOptions(updatedTodo));
      toast.success("Success! Updated todo.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (err: any) {
      toast.error(`Failed to update the todo: ${err.message}`, {
        duration: 1000,
      });
    }
  };

  const deleteTodoMutation = async (todoId: IdType) => {
    try {
      await mutate(deleteTodo(todoId), deleteTodoOptions(todoId));
      toast.success("Success! Deleted todo.", {
        duration: 1000,
        icon: "🎉",
      });
    } catch (err: any) {
      toast.error(`Failed to delete todo: ${err.message}`, {
        duration: 1000,
      });
    }
  };

  return {
    todos,
    isLoading,
    error,
    addTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
  };
};

export default useTodoHook;
