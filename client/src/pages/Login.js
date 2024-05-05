import { useEffect, useCallback, useMemo, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

import logo from "../assets/logo.png";
import AppContext from "../store/app-context";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const appCtx = useContext(AppContext);

  const redirectAfterLogin = useCallback(() => {
    navigate("/user-home");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
        appCtx.handleLogin();
      }),
    [hanko, redirectAfterLogin, appCtx]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-bckgrnd-main h-screen ">
      <div className="flex justify-center place-items-center pb-6 sm:mx-8">
        <Link to="/">
          <img className="w-36 mx-4" src={logo} alt="Sprynt logo" />
        </Link>
      </div>
      <hanko-auth />
    </div>
  );
};

export default Login;
