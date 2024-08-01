import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { SlArrowLeft } from "react-icons/sl";

import { FormContext } from "../pages/Register";
import ContinueButton from "../components/Buttons/ContinueButton";

const AdditionalInfo = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-6">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    organization: yup.string(),
    jobtitle: yup.string(),
  });

  const handleGoingBack = (e) => {
    e.preventDefault();
    setActiveStepIndex(activeStepIndex - 1);
  };

  return (
    <Formik
      initialValues={{
        organization: "",
        jobtitle: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col w-1/5 justify-center items-center">
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Organization</label>
          <Field name="organization" className="border-2 py-2 w-full px-4" />
          <ErrorMessage name="organization" render={renderError} />
        </div>
        <div className="flex flex-col items-start mb-6 w-full">
          <label className="font-medium text-text-dark">Job title</label>
          <Field name="jobtitle" className="border-2 py-2 w-full px-4" />
          <ErrorMessage name="jobtitle" render={renderError} />
        </div>
        <div className="flex justify-center">
          <button
            className="flex justify-center text-white font-medium mt-10 py-2.5 pr-5 pl-3.5 bg-button-blue rounded-xl shadow-xl mr-6"
            onClick={handleGoingBack}
          >
            <SlArrowLeft className="h-5 w-5 sm:inline cursor-pointer pt-1 pr-1" />
            Back
          </button>
          <ContinueButton />
        </div>
      </Form>
    </Formik>
  );
};

export default AdditionalInfo;
