import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registrationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter your email"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  name: Yup.string().required("Please enter your name"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not a valid"),
});

export const sendEmailVerificationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter your email"),
});
