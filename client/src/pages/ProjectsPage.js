import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import logo from "../assets/logo_light.png";
import ProjectsHeader from "../components - projects list/ProjectsHeader";
import TasksView from "../components - projects list/TasksView";
import UsersView from "../components - projects list/UsersView";
import ProjectInfoView from "../components - projects list/ProjectInfoView";
import CreateProjectPopUp from "../components - projects list/PopUps/CreateProjectPopUp";
import CreatedPopUp from "../components - projects list/PopUps/CreatedPopUp";
import FailedCreationPopUp from "../components - projects list/PopUps/FailedCreationPopUp";
import { request } from "../axios/axios_helper";

const ProjectsPage = () => {
  const { userId } = useParams();
  const [tasksClicked, setTasksClicked] = useState(false);
  const [usersClicked, setUsersClicked] = useState(false);
  const [projectInfoClicked, setProjectInfoClicked] = useState(true);
  const [chosenProject, setChosenProject] = useState({});
  const [activeProjects, setActiveProjects] = useState([]);
  const [oldProjects, setOldProjects] = useState([]);

  const [createProjectOpened, setCreateProjectOpened] = useState(false);
  const [createdProjectPopUpOpened, setCreatedProjectPopUpOpened] =
    useState(false);
  const [failedProjectPopUpOpened, setFailedProjectPopUpOpened] =
    useState(false);

  const fetchProjects = useCallback(async () => {
    request("GET", `/projects/active/${userId}`, {})
      .then(async (response) => {
        const data = await response.data;
        setActiveProjects(data);
        setChosenProject(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    request("GET", `/projects/unactive/${userId}`, {})
      .then(async (response) => {
        const data = await response.data;
        setOldProjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

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
        <ProjectsHeader
          project={chosenProject}
          activeProjects={activeProjects}
          oldProjects={oldProjects}
        />
        {(activeProjects.length !== 0 || oldProjects.length !== 0) && (
          <>
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
            <div className="flex flex-col justify-start mx-12 pt-8 overflow-auto h-5/6">
              {tasksClicked && <TasksView project={chosenProject} />}
              {usersClicked && (
                <UsersView
                  project={chosenProject}
                  projectChange={fetchProjects}
                />
              )}
              {projectInfoClicked && (
                <ProjectInfoView
                  project={chosenProject}
                  projectChange={fetchProjects}
                />
              )}
            </div>
          </>
        )}
        {activeProjects.length === 0 && oldProjects.length === 0 && (
          <div className="flex m-10 font-bold text-text-dark text-lg">
            No projects found!
          </div>
        )}
      </div>
      <CreateProjectPopUp
        openPopUp={createProjectOpened}
        closePopUp={handleCloseCreateProject}
        projectChange={fetchProjects}
        openCreatedProjectPopUp={handleOpenCreatedProjectPopUp}
        openFailedProjectPopUp={handleOpenFailedProjectPopUp}
      />
      <CreatedPopUp
        openPopUp={createdProjectPopUpOpened}
        closePopUp={handleCloseCreatedProjectPopUp}
        title="Project"
      />
      <FailedCreationPopUp
        openPopUp={failedProjectPopUpOpened}
        closePopUp={handleCloseFailedProjectPopUp}
        title="Project"
      />
    </div>
  );
};

export default ProjectsPage;
