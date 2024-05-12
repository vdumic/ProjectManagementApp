import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import HeaderLayout from "../layouts/HeaderLayout";
import ProjectsList from "../components/User home/ProjectsList";
import ProjectDetails from "../components/User home/ProjectDetails";
import CreateProjectPopUp from "../components/Project/CreateProjectPopUp";
import CreatedProjectPopUp from "../components/Project/CreatedProjectPopUp";
import FailedProjectCreation from "../components/Project/FailedProjectCreationPopUp";

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

const UserHome = () => {
  const [myProjectsClicked, setMyProjectsClicked] = useState(true);
  const [otherProjectsClicked, setOtherProjectsClicked] = useState(true);
  const [projects, setProjects] = useState([]);
  const [openCreatePopUp, setOpenCreatePopUp] = useState(false);
  const [openCreatedPopUp, setOpenCreatedPopUp] = useState(false);
  const [openFailedPopUp, setOpenFailedPopUp] = useState(false);

  const userEmail = "samantha.jones@gmail.com";

  // useEffect(() => {
  //   const getProjects = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8080/projects_created_by/${userEmail}`
  //       );
  //       const jsonData = await response.json();

  //       setProjects(jsonData);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   getProjects();
  //   console.log(projects);
  // }, [projects]);

  const handleMyProjectsClicked = () => {
    setMyProjectsClicked(!myProjectsClicked);
  };

  const handleOtherProjectsClicked = () => {
    setOtherProjectsClicked(!otherProjectsClicked);
  };

  const handleCloseCreatePopUp = () => {
    setOpenCreatePopUp(false);
  };

  const handleCloseCreatedPopUp = () => {
    setOpenCreatedPopUp(false);
  };

  const handleOpenCreatedPopUp = () => {
    setOpenCreatePopUp(false);
    setOpenCreatedPopUp(true);
  };

  const handleCloseFailedPopUp = () => {
    setOpenFailedPopUp(false);
  };

  const handleOpenFailedPopUp = () => {
    setOpenCreatePopUp(false);
    setOpenFailedPopUp(true);
  };

  return (
    <HeaderLayout title="User home">
      <div className="flex h-svh w-full">
        <div className="flex h-full w-full mx-6">
          <div className="flex flex-col justify-items-end bg-bckgrnd-block w-3/12">
            <div className="m-8 h-64">
              <button
                className="flex justify-start align-middle my-4"
                onClick={handleMyProjectsClicked}
              >
                <h1 className="text-text-dark font-bold text-xl mr-2">
                  My projects
                </h1>
                {!myProjectsClicked && (
                  <div className="pt-1">
                    <IoIosArrowDown size="20px" />
                  </div>
                )}
                {myProjectsClicked && (
                  <div className="pt-1">
                    <IoIosArrowUp size="20px" />
                  </div>
                )}
              </button>
              {myProjectsClicked && <ProjectsList projects={projects} />}
            </div>
            <div className="m-8 h-64">
              <button
                className="flex justify-start align-middle my-2"
                onClick={handleOtherProjectsClicked}
              >
                <h1 className="text-text-dark font-bold text-xl mr-2">
                  Other projects
                </h1>
                {!otherProjectsClicked && (
                  <div className="pt-1">
                    <IoIosArrowDown size="20px" />
                  </div>
                )}
                {otherProjectsClicked && (
                  <div className="pt-1">
                    <IoIosArrowUp size="20px" />
                  </div>
                )}
              </button>
              {otherProjectsClicked && (
                <ProjectsList projects={otherProjects} />
              )}
            </div>
            <div className="flex justify-center my-8">
              <button
                className="bg-button-blue rounded-xl"
                onClick={() => setOpenCreatePopUp(true)}
              >
                <p className="text-lg py-2 px-5 text-white font-medium">
                  Create project
                </p>
              </button>
            </div>
          </div>
          <div className="w-9/12">
            <ProjectDetails />
          </div>
        </div>
      </div>
      <CreateProjectPopUp
        openPopUp={openCreatePopUp}
        closePopUp={handleCloseCreatePopUp}
        openCreatedProjectPopUp={handleOpenCreatedPopUp}
        openFailedProjectPopUp={handleOpenFailedPopUp}
      />
      <CreatedProjectPopUp
        openPopUp={openCreatedPopUp}
        closePopUp={handleCloseCreatedPopUp}
      />
      <FailedProjectCreation
        openPopUp={openFailedPopUp}
        closePopUp={handleCloseFailedPopUp}
      />
    </HeaderLayout>
  );
};

export default UserHome;
