import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { request, setAuthHeader } from "../axios/axios_helper";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const PasskeyLogin = () => {

  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const loginUser = async () => {
    const { id, email } = await hanko.user.getCurrent();
    request("GET", `/user/passkey/${email}/${id}`, {})
      .then((response) => {
        const userId = response.data.id;
        setAuthHeader(response.data.token);
        navigate(`/projects-list/${userId}`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (hanko) {
      const unsubscribe = hanko.onAuthFlowCompleted(() => {
        loginUser();
      });
      return () => unsubscribe();
    }
  }, [hanko]);

  useEffect(() => {
    if (hankoApi) {
      register(hankoApi).catch((error) => {
        console.error("Error during registration:", error);
      });
    } else {
      console.error("Hanko API URL is not defined");
    }
  }, [hankoApi]);

  if (!hankoApi) {
    return <div>Error: Hanko API URL is not configured</div>;
  }

  return (
    <div className="flex justify-center place-items-center bg-bckgrnd-main h-screen ">
      <hanko-auth />
    </div>
  );
};

export default PasskeyLogin;
