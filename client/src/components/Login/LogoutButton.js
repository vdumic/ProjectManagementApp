import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../store/app-context";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

function LogoutBtn() {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState("");
  const appCtx = useContext(AppContext);

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const handleLogout = () => {
    appCtx.handleLogout();
  };

  const logout = async () => {
    try {
      await hanko?.user.logout();
      handleLogout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={() => {
        logout();
        handleLogout();
      }}
      className="bg-button-light m-2 p-3 text-white text-lg rounded-lg"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
