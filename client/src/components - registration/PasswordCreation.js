import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { FormContext } from "../pages/Register";
import ContinueButton from "./Buttons/ContinueButton";

import { request, setAuthHeader } from "../axios/axios_helper";

const PasswordCreation = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-4">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const registerUser = (email, password) => {
    console.log(formData.firstname, formData.lastname, formData.username, email, password, formData.organization,  formData.jobtitle);
    request("POST", "/register", {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      email,
      login: email,
      password,
      organization: formData.organization,
      jobtitle: formData.jobtitle
    })
      .then((response) => {
        setActiveStepIndex(activeStepIndex + 1);
      })
      .catch((error) => {
        setAuthHeader(null);
        setActiveStepIndex(activeStepIndex + 2);
      });
  };

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        registerUser(values.email, values.password);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col w-full max-w-md px-4 sm:px-0 justify-center items-center">
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Email</label>
          <Field
            name="email"
            type="email"
            className="border-2 py-2 w-full px-4"
          />
          <ErrorMessage name="email" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Password</label>
          <Field
            name="password"
            type="password"
            className="border-2 py-2 w-full px-4"
          />
          <ErrorMessage name="password" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Confirm Password</label>
          <Field
            name="confirmPassword"
            type="password"
            className="border-2 py-2 w-full px-4"
          />
          <ErrorMessage name="confirmPassword" render={renderError} />
        </div>
        <ContinueButton />
      </Form>
    </Formik>
  );
};

export default PasswordCreation;
