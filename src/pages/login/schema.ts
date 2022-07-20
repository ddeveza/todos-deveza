import * as Yup from "yup";
const formFieldsSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string().required("Password is required"),
});

export { formFieldsSchema };
