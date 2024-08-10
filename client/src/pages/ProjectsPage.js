import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import { request } from "../axios/axios_helper";

import ProjectsHeader from "../components - projects list/Header/ProjectsHeader";
import TasksView from "../components - projects list/TasksView";
import UsersView from "../components - projects list/UsersView";
import ProjectInfoView from "../components - projects list/ProjectInfoView";
import MobileHeader from "../components - projects list/Header/MobileHeader";
import ProjectsMenu from "../components - projects list/ProjectsMenu";
import CreateProjectPopUp from "../components - projects list/PopUps/CreateProjectPopUp";
import CreatedPopUp from "../components - projects list/PopUps/CreatedPopUp";
import FailedCreationPopUp from "../components - projects list/PopUps/FailedCreationPopUp";
import MobileProjectsHeader from "../components - projects list/Header/MobileProjectsHeader";

const ProjectsPage = () => {
  const [chosenProject, setChosenProject] = useState({});
  const [activeProjects, setActiveProjects] = useState([]);
  const [oldProjects, setOldProjects] = useState([]);

  const [tasksClicked, setTasksClicked] = useState(false);
  const [usersClicked, setUsersClicked] = useState(false);
  const [projectInfoClicked, setProjectInfoClicked] = useState(true);

  const [createProjectOpened, setCreateProjectOpened] = useState(false);
  const [createdProjectPopUpOpened, setCreatedProjectPopUpOpened] =
    useState(false);
  const [failedProjectPopUpOpened, setFailedProjectPopUpOpened] =
    useState(false);

  const { userId } = useParams();

  const fetchProjects = useCallback(async () => {
    request("GET", `/projects/active/${userId}`, {})
      .then((response) => response.data)
      .then((data) => {
        setActiveProjects(data);
        setChosenProject(data[0]);
      })
      .catch((error) => console.log(error));

    request("GET", `/projects/unactive/${userId}`, {})
      .then((response) => response.data)
      .then((data) => setOldProjects(data))
      .catch((error) => console.log(error));
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
      <ProjectsMenu
        activeProjects={activeProjects}
        oldProjects={oldProjects}
        chosenProject={chosenProject}
        setChosenProject={setChosenProject}
        handleProjectInfoClicked={handleProjectInfoClicked}
        setCreateProjectOpened={setCreateProjectOpened}
      />
      <div className="sm:w-full md:w-3/4 h-full bg-bckgrnd-main flex-col justify-start">
        <ProjectsHeader
          project={chosenProject}
          activeProjects={activeProjects}
          oldProjects={oldProjects}
        />
        <MobileHeader />
        <MobileProjectsHeader
          activeProjects={activeProjects}
          oldProjects={oldProjects}
          project={chosenProject}
          setChosenProject={setChosenProject}
          handleProjectInfoClicked={handleProjectInfoClicked}
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
            {tasksClicked && (
              <div className="flex flex-col justify-start md:mx-12 pt-8 overflow-auto h-5/6">
                {tasksClicked && <TasksView project={chosenProject} />}
              </div>
            )}
            {(usersClicked || projectInfoClicked) && (
              <div className="flex flex-col justify-start md:mx-12 pt-8 overflow-auto h-5/6">
                {usersClicked && <UsersView project={chosenProject} />}
                {projectInfoClicked && (
                  <ProjectInfoView
                    project={chosenProject}
                    projectChange={fetchProjects}
                  />
                )}
              </div>
            )}
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
