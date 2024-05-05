import { useEffect, useMemo, useContext } from "react";
import { register, Hanko } from "@teamhanko/hanko-elements";

import { FormContext } from "../../../pages/Register";
import AppContext from "../../../store/app-context";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const PasskeyCreation = () => {
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const appCtx = useContext(AppContext);

  const { activeStepIndex, setActiveStepIndex, formData } =
    useContext(FormContext);

  const addUserToDatabase = async () => {
    let response;
    try {
      const body = {
        email: formData.email,
        firstname: formData.firstname,
        lastname: formData.lastname,
        username: formData.username,
        jobTitle: formData.jobtitle,
        organization: formData.organization,
      };
      response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
    return response;
  };

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        setActiveStepIndex(activeStepIndex + 1);
        addUserToDatabase();
        appCtx.handleLogin();
      }),
    [hanko, setActiveStepIndex, activeStepIndex, appCtx]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className=" bg-bckgrnd-main h-screen">
      <div className="flex justify-center flex-col place-items-center">
        <div className="font-medium mb-4 text-text-dark text-2xl sm:text-center">
          <p>Register by creating your passkey</p>
        </div>
        <hanko-auth />
      </div>
    </div>
  );
};

export default PasskeyCreation;
