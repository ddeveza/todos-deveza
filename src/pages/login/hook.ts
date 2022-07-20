import { useForm, yupResolver } from "@mantine/form";
import { formFieldsSchema } from "./schema";

export const useLoginForm = () => {
  return useForm({
    initialValues: {
      user: "",
      password: "",
    },
    schema: yupResolver(formFieldsSchema),
  });
};
