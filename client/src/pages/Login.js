import { useEffect, useCallback, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

import AppContext from "../store/app-context";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const HankoAuth = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const appCtx = useContext(AppContext);

  const redirectAfterLogin = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  const handleLogin = () => {
    appCtx.handleLogin();
  };

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
        handleLogin();
      }),
    [hanko, redirectAfterLogin, handleLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="flex justify-center place-items-center bg-bckgrnd-main h-screen ">
      <hanko-auth />
    </div>
  );
};

export default HankoAuth;
