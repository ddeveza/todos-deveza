import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TodoStatus {
  Completed = "complete",
  InProcess = "in process",
  Todo = "todo",
}

export interface Todo {
  todo: string;
  id: string;
  status: TodoStatus;
  dateCreated: Date;
  dateUpdated: Date;
}

interface initialStateProps {
  todos: Todo[];
}

const initialState: initialStateProps = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodos: (
      state: initialStateProps,
      { payload }: PayloadAction<Todo[]>
    ) => {
      state.todos = payload;
    },
  },
});

export const { saveTodos } = todosSlice.actions;

export default todosSlice.reducer;
