import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .required("Required")
    .typeError("Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  terms: yup
    .bool()
    .required()
    .oneOf([true], "Terms must be accepted")
    .required("Required"),
});
