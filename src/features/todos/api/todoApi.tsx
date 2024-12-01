import axios from "axios";
import { IdType, TodoType } from "../model/todo.type";

const todosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const todosEndPoint = "/todos";

export const fetchTodos = async () => {
  const { data } = await todosApi.get(todosEndPoint);
  return data;
};

export const addTodo = async (body: TodoType) => {
  const { data } = await todosApi.post(todosEndPoint, body);
  return data;
};

export const updateTodo = async (body: Partial<TodoType>) => {
  const { data } = await todosApi.put(`${todosEndPoint}/${body.id}`, body);
  return data;
};

export const deleteTodo = async (todoId: IdType) => {
  const { data } = await todosApi.delete(`${todosEndPoint}/${todoId}`);
  return data;
};
