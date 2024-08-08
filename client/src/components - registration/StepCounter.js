import { useContext, useEffect } from "react";

import { FormContext } from "../pages/Register";

const Steps = () => {
  const { activeStepIndex } = useContext(FormContext);

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-bckgrnd-spacer");
      } else {
        step.classList.remove("bg-bckgrnd-spacer");
      }
    });
  }, [activeStepIndex]);

  return (
    <div className="flex flex-row items-center justify-center w-full px-4 sm:px-6 lg:px-44 py-6">
      <div className="stepper-item w-10 h-10 sm:w-12 sm:h-12 text-center pt-1 sm:pt-2 font-medium border-2 border-gray-500 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2 border-gray-500 mx-2"></div>
      <div className="stepper-item w-10 h-10 sm:w-12 sm:h-12 text-center pt-1 sm:pt-2 font-medium border-2 border-gray-500 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2 border-gray-500 mx-2"></div>
      <div className="stepper-item w-10 h-10 sm:w-12 sm:h-12 text-center pt-1 sm:pt-2 font-medium border-2 border-gray-500 rounded-full">
        3
      </div>
    </div>
  );
};

export default Steps;
