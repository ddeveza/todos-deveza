import { useForm, yupResolver } from "@mantine/form";
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
  return useForm({
    initialValues: {
      todo: "",
      status: "",
    },
    schema: yupResolver(addSchema),
  });
}
