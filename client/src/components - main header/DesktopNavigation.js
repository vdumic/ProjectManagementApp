import { Link } from "react-router-dom";

import userIcon from "../assets/user_icon.png";

import HeaderLink from "./Buttons/HeaderLink";
import HeaderButton from "./Buttons/HeaderButton";
import MainDropDownMenu from "./MainDropDown";

const DesktopNavigation = ({
  location,
  token,
  validToken,
  toggleMenu,
  isMenuOpen,
}) => {
  return (
    <>
      <div className="hidden md:flex items-center space-x-8">
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

      {(token === null || token === "null" || validToken === false) && (
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/login">
            <p className="text-text-dark text-lg font-medium">Sign in</p>
          </Link>
          <HeaderButton title="Get started" path="/register" />
        </div>
      )}

      {!(token === null || token === "null" || validToken === false) && (
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={toggleMenu}>
            <img
              src={userIcon}
              alt="User icon"
              height="45"
              width="45"
              className="bg-bckgrnd-main rounded-full"
            />
            {isMenuOpen && <MainDropDownMenu />}
          </button>
        </div>
      )}
    </>
  );
};

export default DesktopNavigation;
