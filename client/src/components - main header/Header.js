import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import HeaderButton from "./Buttons/HeaderButton";
import HeaderLink from "./Buttons/HeaderLink";
import { getAuthToken } from "../axios/axios_helper";
import userIcon from "../assets/user_icon.png";
import DropDownMenu from "../components - projects page/DropDownMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(getAuthToken());

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setToken(getAuthToken());
    console.log(token);

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
  }, [token]);

  return (
    <header
      className={`sticky z-50 top-0 flex items-center bg-bckgrnd-light ${
        isScrolled && "bg-opacity-100 drop-shadow-lg"
      }`}
    >
      <main className="max-w-full flex-grow flex flex-col my-3 mx-48">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
            <img src={logo} alt="Sprynt logo" width="110" />
          </Link>
          <div className="flex items-center justify-between mr-64">
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
          </div>
          {(token === null || token === "null") && (
            <div className="flex items-center justify-between">
              <Link to="/login" className="py-2 px-2">
                <p className="text-text-dark text-lg font-medium mr-6">
                  Sign in
                </p>
              </Link>
              <HeaderButton title="Get started" path="/register" />
            </div>
          )}
          {!(token === null || token === "null") && (
            <div className="flex items-center justify-between ml-44">
            <button onClick={toggleMenu}>
              <img
                src={userIcon}
                alt="User icon"
                height="45"
                width="45"
                className="bg-bckgrnd-main rounded-full"
              />
              {isMenuOpen &&  <DropDownMenu />}
            </button>
          </div>
          )}
        </div>
      </main>
    </header>
  );
};

export default Header;
