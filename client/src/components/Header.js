import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";
import HeaderButton from "./Buttons/HeaderButton";
import NavLink from "./Buttons/NavLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    console.log(isScrolled);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <header
      className={`sticky z-50 top-0 flex items-center bg-bckgrnd-light ${
        isScrolled && "bg-opacity-100 drop-shadow-lg"
      }`}
    >
      <main className="max-w-full flex-grow flex flex-col my-3 mx-48">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Sprynt logo" height="100" width="150" />
          </Link>
          <div className="flex items-center justify-between mr-80">
            <NavLink title="Work management" path="/work-management" />
            <NavLink title="About us" path="/about-us" />
            <NavLink title="Support" path="/support" />
          </div>
          {!isLoggedIn && (
            <div className="flex items-center justify-between">
              <button className="py-2 px-2" onClick={handleSignIn}>
                <p className="text-text-dark text-lg font-medium mr-6">
                  Sign in
                </p>
              </button>
              <HeaderButton title="Get started" />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center justify-between ml-44">
              <button onClick={handleSignOut}>
                <img
                  src={userIcon}
                  alt="User icon"
                  height="50"
                  width="50"
                  className="bg-bckgrnd-main rounded-full p-1"
                />
              </button>
            </div>
          )}
        </div>
      </main>
    </header>
  );
};

export default Header;
