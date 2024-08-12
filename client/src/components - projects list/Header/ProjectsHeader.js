import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import userIcon from "../../assets/user_icon.png";

import DropDownMenu from "./DropDownMenu";

const ProjectsHeader = ({ project, activeProjects, oldProjects }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useParams();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="hidden md:flex w-full bg-bckgrnd-blue_light">
      <main className="max-w-full flex-grow flex flex-col py-3 mx-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start w-5/6">
            {(activeProjects.length !== 0 || oldProjects.length !== 0) && (
              <div className="flex items-center justify-between mr-8">
                <p className="font-medium text-text-dark text-2xl text-nowrap">
                  {project.projectName}
                </p>
              </div>
            )}
            <div className="flex items-center justify-between">
              {(activeProjects.length !== 0 || oldProjects.length !== 0) && (
                <Link
                  to={`/projects/${userId}/${project.projectId}`}
                  className="bg-white rounded border-2 border-gray-500 shadow-lg"
                >
                  <p className="text-lg py-0.5 px-4 text-text-dark font-medium">
                    Open project
                  </p>
                </Link>
              )}
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

export default ProjectsHeader;
