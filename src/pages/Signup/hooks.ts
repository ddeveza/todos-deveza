import { useForm, yupResolver } from "@mantine/form";
import { registrationSchema } from "./schema";

export function useRegistrationForm() {
  return useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
    },
    schema: yupResolver(registrationSchema),
  });
}
