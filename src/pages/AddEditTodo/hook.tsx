import { useForm, yupResolver } from "@mantine/form";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { RootState } from "../../features/store";
import { addSchema } from "./schema";

export function useAddForm() {
  return useForm({
    initialValues: {
      todo: "",
    },
    schema: yupResolver(addSchema),
  });
}

export function useEditForm() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const match = useMatch("/edit/:id");

  const selectedTodoID = match?.params?.id;
  const selectedTodo = useMemo(
    () => todos.find((todo) => todo.id === selectedTodoID),
    [selectedTodoID, todos]
  );
  return useForm({
    initialValues: {
      todo: selectedTodo?.todo,
      status: selectedTodo?.status,
    },
    schema: yupResolver(addSchema),
  });
}
