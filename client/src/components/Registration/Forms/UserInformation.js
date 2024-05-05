import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { FormContext } from "../../../pages/Register";
import ContinueButton from "../../Buttons/ContinueButton";

const UserInformation = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-6">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Email not valid").required("Email is required"),
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        firstname: "",
        lastname: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        let userExists = false;
        const data = { ...formData, ...values };
        setFormData(data);

        try {
          const response = await fetch(
            `http://localhost:8080/users/exist/${formData.email}`
          );
          const jsonData = await response.json();
          userExists = jsonData;
        } catch (error) {
          console.error(error.message);
        }

        console.log(userExists);

        if (userExists) {
          setActiveStepIndex(4);
        } else {
          setActiveStepIndex(activeStepIndex + 1);
        }
      }}
    >
      <Form className="flex flex-col w-1/5 justify-center items-center">
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Firstname</label>
          <Field
            name="firstname"
            className="border-2 py-2 w-full px-4"
            placeholder="firstname"
          />
          <ErrorMessage name="firstname" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Lastname</label>
          <Field
            name="lastname"
            className="border-2 py-2 w-full px-4"
            placeholder="lastname"
          />
          <ErrorMessage name="lastname" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Email</label>
          <Field
            name="email"
            className="border-2 py-2 w-full px-4"
            placeholder="example@mail.com"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />
        <ContinueButton />
      </Form>
    </Formik>
  );
};

export default UserInformation;
