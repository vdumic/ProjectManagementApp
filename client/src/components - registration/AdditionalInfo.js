import { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import * as yup from "yup";

import { FormContext } from "../pages/Register";

const AdditionalInfo = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full pt-4">{message}</p>
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
      <Form className="flex flex-col w-full max-w-md px-4 sm:px-0 justify-center items-center">
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
        <div className="flex flex-col sm:flex-row justify-center w-full">
          <button
            className="flex items-center justify-center text-white font-medium mt-10 py-2 px-4 bg-bckgrnd-blue_dark rounded-xl shadow-xl mb-4 sm:mb-0 sm:mr-4"
            onClick={handleGoingBack}
          >
            <SlArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <button
            className="flex items-center justify-center text-white font-medium mt-10 py-2 px-4 bg-bckgrnd-blue_dark rounded-xl shadow-xl mb-4 sm:mb-0 sm:mr-4"
            type="submit"
          >
            Continue
            <SlArrowRight className="h-5 w-5" />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AdditionalInfo;
