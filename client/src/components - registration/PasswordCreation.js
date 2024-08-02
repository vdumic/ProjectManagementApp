import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { FormContext } from "../pages/Register";
import { request, setAuthHeader } from "../axios/axios_helper";

const PasswordCreation = () => {

  const { setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-6">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const registerUser = (email, password) => {
    request("POST", 
            "/register", 
            {
              firstname: formData.firstname,
              lastname: formData.lastname,
              username: formData.username,
              login: formData.username,
              email,
              password,
              organization: formData.organization,
              jobtitle: formData.jobtitle
            }).then(
              (response) => {
                const userId = response.data.id;
                const data = {...formData, userId};
                setFormData(data);
                setAuthHeader(response.data.token);
                setActiveStepIndex(3);
              }
            ).catch(
              (error) => {
                setAuthHeader(null);
                setActiveStepIndex(4);
                console.log(error);
              }
            )
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={ (values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        registerUser(values.email, values.password);
      }}
    >
      <Form className="flex flex-col w-1/5 justify-center items-center">
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Email</label>
          <Field
            name="email"
            className="border-2 py-2 w-full px-4"
            placeholder="example@mail.com"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Password</label>
          <Field
            name="password"
            className="border-2 py-2 w-full px-4"
            type="password"
            placeholder="(minimum 8 characters)"
          />
          <ErrorMessage name="password" render={renderError} />
        </div>
        <button
          className="flex justify-center text-white font-medium mt-10 py-2 px-3 bg-button-blue rounded-xl shadow-xl "
          type="submit"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default PasswordCreation;
