import { useEffect, useMemo, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

import { request, setAuthHeader } from "../axios/axios_helper";

import logo from "../assets/logo.png";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const PasskeyLogin = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const loginUser = useCallback(async () => {
    const { id, email } = await hanko.user.getCurrent();
    request("POST", `/user/passkey/${email}/${id}`, {})
      .then((response) => {
        const userId = response.data.id;
        setAuthHeader(response.data.token);
        navigate(`/projects-list/${userId}`);
      })
      .catch((error) => console.log(error));
  }, [hanko.user, navigate]);

  useEffect(() => {
    if (hanko) {
      const unsubscribe = hanko.onAuthFlowCompleted(() => {
        loginUser();
      });
      return () => unsubscribe();
    }
  }, [hanko, loginUser]);

  useEffect(() => {
    if (hankoApi) {
      register(hankoApi).catch((error) => {
        console.error("Error during registration:", error);
      });
    } else {
      console.error("Hanko API URL is not defined");
    }
  }, []);

  if (!hankoApi) {
    return <div>Error: Hanko API URL is not configured</div>;
  }

  return (
    <div className="flex flex-col justify-center place-items-center bg-bckgrnd-main h-screen ">
      <Link to="/" className="mb-10 pt-8">
        <img src={logo} alt="Sprynt logo" width="150" />
      </Link>
      <hanko-auth />
    </div>
  );
};

export default PasskeyLogin;
