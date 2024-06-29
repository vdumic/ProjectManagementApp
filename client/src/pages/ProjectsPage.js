import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo_light.png";
import ProjectsHeader from "../components/ProjectsHeader";
import TasksView from "../components/Projects page/TasksView";
import UsersView from "../components/Projects page/UsersView";
import ProjectInfoView from "../components/Projects page/ProjectInfoView";

const myProjects = [
  {
    name: "Website Redesign for Cleaning Company",
  },
  {
    name: "Software Development: Mobile App Upgrade",
  },
];

const otherProjects = [
  {
    name: "Design and Development of a Video Conferencing Application",
  },
  {
    name: "Building an Inventory Management System for Retail",
  },
  {
    name: "Implementation of a Chatbot for Customer Support",
  },
];

const ProjectsPage = () => {
  const [tasksClicked, setTasksClicked] = useState(true);
  const [usersClicked, setUsersClicked] = useState(false);
  const [projectInfoClicked, setProjectInfoClicked] = useState(false);

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

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-bckgrnd-blue_dark h-screen overflow-clip flex">
        <div className="flex-grow flex flex-col justify-between">
          <div className="flex flex-col justify-start">
            <div className="flex justify-center my-5">
              <Link to="/">
                <img src={logo} alt="Sprynt logo" width="110" />
              </Link>
            </div>
            <div className="flex flex-col justify-start mx-8 my-6">
              <p className="text-2xl text-bckgrnd-main font-medium">Projects</p>
              <div className="flex flex-col justify-start my-5">
                <p className="text-lg text-bckgrnd-main font-medium underline">
                  Website Redesign for Cleaning Company
                </p>
                <p className="text-lg text-bckgrnd-main">
                  Software Development: Mobile App Upgrade
                </p>
                <p className="text-lg text-bckgrnd-main">
                  Design and Development of a Video Conferencing Application
                </p>
                <p className="text-lg text-bckgrnd-main">
                  Building an Inventory Management System for Retail
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start mx-8 my-6">
              <p className="text-2xl text-bckgrnd-main font-medium">
                Old projects
              </p>
              <div className="flex flex-col justify-start my-5">
                <p className="text-lg text-bckgrnd-main">
                  Implementation of a Chatbot for Customer Support
                </p>
                <p className="text-lg text-bckgrnd-main">
                  Creation of a Data Analytics Dashboard for Business Insights
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <button className="bg-bckgrnd-light rounded-2xl drop-shadow-xl mx-2">
              <p className="text-xl py-3 px-7 text-button-blue font-bold">
                Create project
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 h-full bg-bckgrnd-main flex-col justify-start">
        <ProjectsHeader />
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
        {tasksClicked && <TasksView />}
        {usersClicked && <UsersView />}
        {projectInfoClicked && <ProjectInfoView />}
      </div>
    </div>
  );
};

export default ProjectsPage;
