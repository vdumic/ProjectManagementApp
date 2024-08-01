import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { request, setAuthHeader } from "../axios/axios_helper";
import * as yup from "yup";

const UserLogin = ({handleError}) => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

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

  const loginUser = () => {
    request("POST", 
            "/login", 
            {
              email: formData.email,
              password: formData.password
            }).then(
              (response) => {
                setAuthHeader(response.data.token);
                navigate(`/projects-list/${response.data.id}`);
              }
            ).catch(
              (error) => {
                setAuthHeader(null);
                handleError(error.response.data);
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
      onSubmit={(values) => {
        const data = { ...values };
        setFormData(data);
        loginUser();
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
          <ErrorMessage name="email" render={renderError} />
        </div>
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
          className="flex justify-center text-white font-medium mt-8 px-3.5 py-2 bg-button-blue rounded-xl shadow-xl "
          type="submit"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default UserLogin;
