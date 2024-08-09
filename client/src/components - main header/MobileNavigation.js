import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  request,
  setAuthHeader,
  setHankoSession,
  getAuthToken,
} from "../axios/axios_helper";

import HeaderLink from "./Buttons/HeaderLink";
import HeaderButton from "./Buttons/HeaderButton";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const MobileNavigation = ({ location, token, validToken }) => {
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
    <div className="md:hidden flex flex-col">
      <HeaderLink
        title="Work management"
        path="/work-management"
        location={location.pathname}
      />
      <HeaderLink
        title="About us"
        path="/about-us"
        location={location.pathname}
      />
      <HeaderLink
        title="Support"
        path="/support"
        location={location.pathname}
      />
      {(token === null || token === "null" || validToken === false) && (
        <>
          <Link to="/login">
            <p className="text-text-dark text-lg font-medium px-1 py-2">
              Sign in
            </p>
          </Link>
          <HeaderButton title="Get started" path="/register" />
        </>
      )}

      {!(token === null || token === "null" || validToken === false) && (
        <>
          <Link to={`/projects-list/${user.id}`}>
            <p className="text-text-dark text-lg font-medium px-1 py-2">
              Projects
            </p>
          </Link>
          <Link to={`/profile/${user.id}`}>
            <p className="text-text-dark text-lg font-medium px-1 py-2">
              Profile
            </p>
          </Link>
          <div className="py-2 px-3 text-white bg-bckgrnd-blue_dark rounded-md font-semibold w-fit mb-2">
            <button onClick={logout}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNavigation;
