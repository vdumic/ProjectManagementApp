import { Link } from "react-router-dom";

import logo from "../assets/logo_light.png";
import HeaderLayout from "../layouts/HeaderLayout";
import ProjectsHeader from "../components/ProjectsHeader";
import CreateButton from "../components/Buttons/CreateButton";

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
              <p className="font-medium text-text-dark text-xl underline mr-12">
                Tasks
              </p>
              <p className="font-medium text-text-dark text-xl px-2 mr-12">
                Users
              </p>
              <p className="font-medium text-text-dark text-xl px-2">
                Project info
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
