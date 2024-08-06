import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  request,
  getAuthToken,
  setAuthHeader,
  setHankoSession,
} from "../axios/axios_helper";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const MainDropDownMenu = () => {
  const [user, setUser] = useState([]);
  const [hanko, setHanko] = useState("");

  const navigate = useNavigate();

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

  const fetchUser = () => {
    request("GET", `/signed_user/${getAuthToken()}`)
      .then((response) => response.data)
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );

    fetchUser();
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-0 z-10 w-44 mt-4 origin-top-right bg-bckgrnd-main p-2 rounded-md shadow-xl">
        <div className="p-2 text-bckgrnd-blue_dark bg-bckgrnd-light rounded-md font-semibold mb-2">
          <Link to={`/projects-list/${user.id}`}>Projects</Link>
        </div>
        <div className="p-2 text-bckgrnd-blue_dark bg-bckgrnd-light rounded-md font-semibold mb-2">
          <Link to={`/profile/${user.id}`}>Profile</Link>
        </div>
        <div className="p-2 text-white bg-bckgrnd-blue_dark rounded-md font-semibold">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default MainDropDownMenu;
