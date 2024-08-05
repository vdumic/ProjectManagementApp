import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { FormContext } from "../pages/Register";
import ContinueButton from "./Buttons/ContinueButton";

const UserInformation = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-6">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    username: yup.string().required("Username is required"),
  });

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        username: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={ (values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col w-1/5 justify-center items-center">
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Firstname</label>
          <Field
            name="firstname"
            className="border-2 py-2 w-full px-4"
          />
          <ErrorMessage name="firstname" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Lastname</label>
          <Field
            name="lastname"
            className="border-2 py-2 w-full px-4"
          />
          <ErrorMessage name="lastname" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Username</label>
          <Field
            name="username"
            className="border-2 py-2 w-full px-4"
          />
          <ErrorMessage name="username" render={renderError} />
        </div>
        <ContinueButton />
      </Form>
    </Formik>
  );
};

export default UserInformation;
