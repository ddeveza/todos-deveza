import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Password is required"),
});
