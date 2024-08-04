import { Link, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";
import HeaderLink from "../components - main header/Buttons/HeaderLink";
import DropDownMenu from "../components - projects list/DropDownMenu";

const ProjectHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId, projectId } = useParams();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky z-50 top-0 flex items-center bg-bckgrnd-blue_light">
      <main className="w-full flex-grow flex flex-col my-3 mx-48">
        <div className="flex items-center justify-between">
          <div className="flex justify-start items-center">
            <Link to="/">
              <img src={logo} alt="Sprynt logo" width="110" />
            </Link>
            <div className="flex items-center justify-between ml-32">
              <HeaderLink
                title="All projects"
                path={`/projects-list/${userId}`}
                location={location.pathname}
              />
            </div>
          </div>
          <div className="flex items-center justify-between ml-44">
            <button onClick={toggleMenu}>
            <img
                src={userIcon}
                alt="User icon"
                height="45"
                width="45"
                className="bg-bckgrnd-main rounded-full"
              />
              {isMenuOpen && <DropDownMenu />}
            </button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default ProjectHeader;
