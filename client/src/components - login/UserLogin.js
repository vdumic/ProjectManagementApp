import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { request, setAuthHeader } from "../axios/axios_helper";

const UserLogin = ({ handleError }) => {
  const navigate = useNavigate();

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-2 sm:pt-4">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const loginUser = (email, password) => {
    request("POST", "/login", {
      email,
      password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        navigate(`/projects-list/${response.data.id}`);
      })
      .catch((error) => {
        setAuthHeader(null);
        handleError(error.response.data);
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        loginUser(values.email, values.password);
      }}
    >
      <Form className="flex flex-col w-full max-w-md sm:max-w-lg justify-center items-center">
        <div className="flex flex-col items-start mb-4 w-full">
          <label className="font-medium text-text-dark">Email</label>
          <Field
            name="email"
            className="border-2 py-2 w-full px-4 rounded-md"
            placeholder="example@mail.com"
          />
          <ErrorMessage name="email" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-4 w-full">
          <label className="font-medium text-text-dark">Password</label>
          <Field
            name="password"
            className="border-2 py-2 w-full px-4 rounded-md"
            type="password"
            placeholder="(minimum 8 characters)"
          />
          <ErrorMessage name="password" render={renderError} />
        </div>
        <button
          className="flex justify-center items-center text-white font-medium mt-6 sm:mt-8 px-4 py-2 bg-bckgrnd-blue_dark rounded-xl shadow-xl"
          type="submit"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default UserLogin;