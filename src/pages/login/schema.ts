import * as Yup from "yup";
const formFieldsSchema = Yup.object().shape({
  user: Yup.string().required("Please enter your email address"),
  password: Yup.string().required("Password is required"),
});

export { formFieldsSchema };
