import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import logo from "../assets/logo_light.png";
import ProjectsHeader from "../components/ProjectsHeader";
import TasksView from "../components/Projects/TasksView";
import UsersView from "../components/Projects/UsersView";
import ProjectInfoView from "../components/Projects/ProjectInfoView";
import CreateProjectPopUp from "../components/PopUps/CreateProjectPopUp";
import CreatedProjectPopUp from "../components/PopUps/CreatedProjectPopUp";
import FailedProjectCreationPopUp from "../components/PopUps/FailedProjectCreationPopUp";

const ProjectsPage = () => {
  const [tasksClicked, setTasksClicked] = useState(true);
  const [usersClicked, setUsersClicked] = useState(false);
  const [projectInfoClicked, setProjectInfoClicked] = useState(false);
  const [chosenProject, setChosenProject] = useState({});
  const [activeProjects, setActiveProjects] = useState([]);
  const [oldProjects, setOldProjects] = useState([]);

  const [createProjectOpened, setCreateProjectOpened] = useState(false);
  const [createdProjectPopUpOpened, setCreatedProjectPopUpOpened] =
    useState(false);
  const [failedProjectPopUpOpened, setFailedProjectPopUpOpened] =
    useState(false);

  const getActiveProjects = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/projects/active/72516c5b-6454-4e26-ae1b-a019e03dd9db"
      );
      if (response.ok) {
        const data = await response.json();
        setActiveProjects(data);
        setChosenProject(data.at(0));
      } else {
        console.error("Failed to fetch projects:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getOldProjects = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/projects/unactive/72516c5b-6454-4e26-ae1b-a019e03dd9db"
      );
      if (response.ok) {
        const data = await response.json();
        setOldProjects(data);
      } else {
        console.error("Failed to fetch projects:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleProjectChange = useCallback(() => {
    getActiveProjects();
    getOldProjects();
  }, []);

  useEffect(() => {
    getActiveProjects();
    getOldProjects();
  }, []);

  const handleTasksClicked = () => {
    setTasksClicked(true);
    setUsersClicked(false);
    setProjectInfoClicked(false);
  };

  const handleUsersClicked = () => {
    setTasksClicked(false);
    setUsersClicked(true);
    setProjectInfoClicked(false);
  };

  const handleProjectInfoClicked = () => {
    setTasksClicked(false);
    setUsersClicked(false);
    setProjectInfoClicked(true);
  };

  const handleCloseCreateProject = () => {
    setCreateProjectOpened(false);
  };

  const handleOpenCreatedProjectPopUp = () => {
    setCreatedProjectPopUpOpened(true);
    setCreateProjectOpened(false);
  };

  const handleCloseCreatedProjectPopUp = () => {
    setCreatedProjectPopUpOpened(false);
  };

  const handleOpenFailedProjectPopUp = () => {
    setFailedProjectPopUpOpened(true);
    setCreateProjectOpened(false);
  };

  const handleCloseFailedProjectPopUp = () => {
    setFailedProjectPopUpOpened(false);
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-bckgrnd-blue_dark h-screen overflow-clip flex">
        <div className="flex-grow flex flex-col justify-between h-screen">
          <div className="flex flex-col justify-start h-screen">
            <div className="flex justify-center my-5 h-fit">
              <Link to="/">
                <img src={logo} alt="Sprynt logo" width="110" />
              </Link>
            </div>
            <div className="flex flex-col justify-start mx-8 my-6 h-4/5 overflow-y-auto">
              <p className="text-2xl text-bckgrnd-main font-medium">Projects</p>
              <div className="flex flex-col justify-start my-5 overflow-y-auto">
                {activeProjects.map((project) => {
                  const isChosen =
                    project.projectName === chosenProject.projectName;
                  return (
                    <button
                      className={`text-lg text-bckgrnd-main text-start ${
                        isChosen ? "underline font-medium" : ""
                      }`}
                      key={project.projectId}
                      onClick={() => setChosenProject(project)}
                    >
                      {project.projectName}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-start mx-8 my-6 h-3/5 overflow-y-auto">
              <p className="text-2xl text-bckgrnd-main font-medium">
                Old projects
              </p>
              <div className="flex flex-col justify-start my-5 overflow-y-auto">
                {oldProjects.map((project) => {
                  const isChosen =
                    project.projectName === chosenProject.projectName;
                  return (
                    <button
                      className={`text-lg text-bckgrnd-main text-start ${
                        isChosen ? "underline font-medium" : ""
                      }`}
                      key={project.projectId}
                      onClick={() => setChosenProject(project)}
                    >
                      {project.projectName}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <button
              className="bg-bckgrnd-light rounded drop-shadow-xl mx-2"
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
      <div className="w-3/4 h-full bg-bckgrnd-main flex-col justify-start">
        <ProjectsHeader project={chosenProject} />
        <div className="flex items-center justify-between pt-1.5 pb-3 pl-14 border-b-2 border-gray-400">
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-between mr-8 mt-4">
              <button
                className={`font-medium text-text-dark text-xl mr-12 ${
                  tasksClicked ? "underline" : ""
                }`}
                onClick={handleTasksClicked}
              >
                Tasks
              </button>
              <button
                className={`font-medium text-text-dark text-xl px-2 mr-12 ${
                  usersClicked ? "underline" : ""
                }`}
                onClick={handleUsersClicked}
              >
                Users
              </button>
              <button
                className={`font-medium text-text-dark text-xl px-2 ${
                  projectInfoClicked ? "underline" : ""
                }`}
                onClick={handleProjectInfoClicked}
              >
                Project info
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start mx-12 pt-8 overflow-y-auto h-5/6">
          {tasksClicked && <TasksView />}
          {usersClicked && <UsersView />}
          {projectInfoClicked && (
            <ProjectInfoView
              project={chosenProject}
              projectChange={handleProjectChange}
            />
          )}
        </div>
      </div>
      <CreateProjectPopUp
        openPopUp={createProjectOpened}
        closePopUp={handleCloseCreateProject}
        projectChange={handleProjectChange}
        openCreatedProjectPopUp={handleOpenCreatedProjectPopUp}
        openFailedProjectPopUp={handleOpenFailedProjectPopUp}
      />
      <CreatedProjectPopUp
        openPopUp={createdProjectPopUpOpened}
        closePopUp={handleCloseCreatedProjectPopUp}
      />
      <FailedProjectCreationPopUp
        openPopUp={failedProjectPopUpOpened}
        closePopUp={handleCloseFailedProjectPopUp}
      />
    </div>
  );
};

export default ProjectsPage;
