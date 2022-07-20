import * as Yup from "yup";

export const addSchema = Yup.object().shape({
  todo: Yup.string().required("Please enter Todo"),
});
