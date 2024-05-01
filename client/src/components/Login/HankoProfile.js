import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import LogoutBtn from "./LogoutButton";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const HankoProfile = () => {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="flex h-screen justify-center place-items-center">
      <div className="h-full flex flex-col justify-center">
        <hanko-profile />
        <LogoutBtn />
      </div>
    </div>
  );
};

export default HankoProfile;
