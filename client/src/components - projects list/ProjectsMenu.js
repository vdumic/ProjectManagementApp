import { Link } from "react-router-dom";

import logo from "../assets/logo_light.png";

import ProjectsList from "./ProjectsList";

const ProjectsMenu = ({
  activeProjects,
  oldProjects,
  chosenProject,
  setChosenProject,
  handleProjectInfoClicked,
  setCreateProjectOpened,
}) => {
  return (
    <div className="hidden md:flex w-1/4 bg-bckgrnd-blue_dark h-screen overflow-clip">
      <div className="flex-grow flex flex-col justify-between h-screen">
        <div className="flex flex-col justify-start h-screen">
          <div className="flex justify-center my-5 h-fit">
            <Link to="/">
              <img src={logo} alt="Sprynt logo" width="110" />
            </Link>
          </div>
          <ProjectsList
            activeProjects={activeProjects}
            oldProjects={oldProjects}
            chosenProject={chosenProject}
            setChosenProject={setChosenProject}
            handleProjectInfoClicked={handleProjectInfoClicked}
          />
        </div>
        <div className="flex justify-center my-8">
          <button
            className="bg-bckgrnd-light rounded-full drop-shadow-xl mx-2"
            onClick={() => {
              setCreateProjectOpened(true);
            }}
          >
            <p className="text-xl py-3 px-7 text-button-blue font-bold">
              Create project
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;
