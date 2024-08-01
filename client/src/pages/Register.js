import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import StepCounter from "../components - registration/StepCounter";
import DisplayedStep from "../components - registration/DisplayedStep";
import Success from "../components - registration/Success";
import Failure from "../components - registration/Failure";

import logo from "../assets/logo.png";

export const FormContext = createContext();

const Register = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const handleBeginRegistration = () => {
    setActiveStepIndex(0);
  }

  if (activeStepIndex === 3) {
    window.scrollTo(0, 0);

    return <Success email={formData.email} userId={formData.userId}/>;
  }

  if (activeStepIndex === 4) {
    window.scrollTo(0, 0);

    return <Failure email={formData.email} handleBeginRegistration={handleBeginRegistration}/>;
  }

  return (
    <div className=" bg-bckgrnd-main h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Registration</title>
      </Helmet>
      <div className="flex justify-center place-items-center pt-14 sm:mx-8">
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
