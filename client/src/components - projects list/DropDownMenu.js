import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

import { setAuthHeader, setHankoSession } from "../axios/axios_helper";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const DropDownMenu = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [hanko, setHanko] = useState("");

  const logout = async () => {
    try {
      await hanko?.user.logout();
      setHankoSession(null);
      setAuthHeader(null);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-0 z-10 w-44 mt-4 origin-top-right bg-bckgrnd-main p-2 rounded-md shadow-xl">
        <div className="p-2 text-bckgrnd-blue_dark bg-bckgrnd-light rounded-md font-semibold mb-2">
          <Link to={`/profile/${userId}`}>Profile</Link>
        </div>
        <div className="p-2 text-white bg-bckgrnd-blue_dark rounded-md font-semibold">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
