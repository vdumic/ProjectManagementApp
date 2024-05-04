import { createContext, useState } from "react";
import { Helmet } from "react-helmet";

import StepCounter from "../components/Registration/StepCounter";
import DisplayedStep from "../components/Registration/DisplayedStep";
import Success from "../components/Registration/Forms/Success";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const FormContext = createContext();

const Register = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  if (activeStepIndex === 3) {
    window.scrollTo(0, 0);
    return (
      <div className="flex flex-col h-screen items-center pt-20">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sprynt / Registration</title>
        </Helmet>
        <Success />
        <div className="text-xl font-light pt-5 sm:text-center">
          Confirmation email was sent to: {formData.email}
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-bckgrnd-main h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Registration</title>
      </Helmet>
      <div className="flex justify-center place-items-center mt-10 sm:mx-8">
        <p className="font-medium text-text-dark text-2xl sm:text-center">
          Organize your projects with
        </p>
        <Link to="/">
          <img className="w-36 mx-4" src={logo} alt="Sprynt logo" />
        </Link>
      </div>
      <FormContext.Provider
        value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
      >
        <div className="w-full flex flex-col items-center justify-start mb-10">
          <StepCounter />
          <DisplayedStep />
        </div>
      </FormContext.Provider>
    </div>
  );
};

export default Register;
