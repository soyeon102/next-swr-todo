export type IdType = number;

export interface TodoType {
  id: IdType;
  todo: string;
  userId: number;
  completed: boolean;
}

export interface TodoListType {
  todoList: TodoListType[];
}
