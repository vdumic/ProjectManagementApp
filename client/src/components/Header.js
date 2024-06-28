import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import AppContext from "../store/app-context";
import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";
import HeaderButton from "./Buttons/HeaderButton";
import NavLink from "./Buttons/NavLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const appCtx = useContext(AppContext);

  const isLoggedIn = appCtx.userData.isLoggedIn;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`sticky z-50 top-0 flex items-center bg-bckgrnd-light ${
        isScrolled && "bg-opacity-100 drop-shadow-lg"
      }`}
    >
      <main className="max-w-full flex-grow flex flex-col my-3 mx-48">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Sprynt logo" width="110" />
          </Link>
          <div className="flex items-center justify-between mr-64">
            <NavLink
              title="Work management"
              path="/work-management"
              location={location.pathname}
            />
            <NavLink
              title="About us"
              path="/about-us"
              location={location.pathname}
            />
            <NavLink
              title="Support"
              path="/support"
              location={location.pathname}
            />
            {isLoggedIn && <NavLink title="Projects" path="projects" />}
          </div>
          {!isLoggedIn && (
            <div className="flex items-center justify-between">
              <Link to="/login" className="py-2 px-2">
                <p className="text-text-dark text-lg font-medium mr-6">
                  Sign in
                </p>
              </Link>
              <HeaderButton title="Get started" path="/register" />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center justify-between ml-44">
              <Link to="/profile">
                <img
                  src={userIcon}
                  alt="User icon"
                  height="45"
                  width="45"
                  className="bg-bckgrnd-main rounded-full"
                />
              </Link>
            </div>
          )}
        </div>
      </main>
    </header>
  );
};

export default Header;
