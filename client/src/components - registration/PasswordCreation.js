import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { FormContext } from "../pages/Register";
import ContinueButton from "./Buttons/ContinueButton";

const PasswordCreation = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-4">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

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
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col w-full max-w-md px-4 sm:px-0 justify-center items-center">
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
