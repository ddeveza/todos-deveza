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
  user: {
    email: string;
    uid: string;
  };
}

const initialState: initialStateProps = {
  todos: [],
  user: {
    email: "",
    uid: "",
  },
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
    setUser: (
      state: initialStateProps,
      { payload }: PayloadAction<{ email: string; uid: string }>
    ) => {
      state.user = payload;
    },
  },
});

export const { saveTodos, setUser } = todosSlice.actions;

export default todosSlice.reducer;
