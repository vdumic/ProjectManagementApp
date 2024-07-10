import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";
import NavLink from "./Buttons/NavLink";

const ProjectHeader = () => {
  const location = useLocation();

  return (
    <header className="sticky z-50 top-0 flex items-center bg-bckgrnd-blue_light">
      <main className="w-full flex-grow flex flex-col my-3 mx-48">
        <div className="flex items-center justify-between">
          <div className="flex justify-start items-center">
            <Link to="/">
              <img src={logo} alt="Sprynt logo" width="110" />
            </Link>
            <div className="flex items-center justify-between ml-32">
              <NavLink
                title="All projects"
                path="/projects"
                location={location.pathname}
              />
            </div>
          </div>
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
        </div>
      </main>
    </header>
  );
};

export default ProjectHeader;
