import { Link, useParams, useLocation } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";

import HeaderLink from "../components - main header/Buttons/HeaderLink";
import DropDownMenu from "../components - projects list/Header/DropDownMenu";

const ProjectHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useParams();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="hidden md:flex sticky z-50 top-0 bg-bckgrnd-blue_light">
      <main className="w-full flex-grow flex flex-col justify-between px-4 sm:px-8 py-3 mx-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Sprynt logo" width="110" />
            </Link>
            <div className="hidden md:flex items-center ml-6 sm:ml-16">
              <HeaderLink
                title="All projects"
                path={`/projects-list/${userId}`}
                location={location.pathname}
              />
            </div>
          </div>
          <div className="flex items-center">
            <button onClick={toggleMenu}>
              <img
                src={userIcon}
                alt="User icon"
                className="h-10 w-10 sm:h-12 sm:w-12 bg-bckgrnd-main rounded-full"
              />
              {isMenuOpen && <DropDownMenu />}
            </button>
          </div>
        </div>
        <div className="flex md:hidden mt-3">
          <HeaderLink
            title="All projects"
            path={`/projects-list/${userId}`}
            location={location.pathname}
          />
        </div>
      </main>
    </header>
  );
};

export default ProjectHeader;
