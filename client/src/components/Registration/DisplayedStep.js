import { useContext } from "react";

import { FormContext } from "../../pages/Register";
import UserInformation from "./Forms/UserInformation";
import AdditionalInfo from "./Forms/AdditionalInfo";
import PasskeyCreation from "./Forms/PasskeyCreation";

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
      stepContent = <PasskeyCreation />;
      break;
    default:
      break;
  }
  return stepContent;
};

export default DisplayedStep;
