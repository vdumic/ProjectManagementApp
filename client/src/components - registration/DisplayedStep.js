import { useContext } from "react";

import { FormContext } from "../pages/Register";
import UserInformation from "./UserInformation";
import AdditionalInfo from "./AdditionalInfo";
import PasswordCreation from "./PasswordCreation";

const DisplayedStep = () => {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <UserInformation />;
      break;
    case 1:
      stepContent = <AdditionalInfo />;
      break;
    case 2:
      stepContent = <PasswordCreation />;
      break;
    default:
      break;
  }
  return stepContent;
};

export default DisplayedStep;
