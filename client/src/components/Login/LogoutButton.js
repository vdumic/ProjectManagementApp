import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

function LogoutBtn() {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState("");

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={logout}
      className="bg-button-light m-2 p-3 text-white text-lg rounded-lg"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
