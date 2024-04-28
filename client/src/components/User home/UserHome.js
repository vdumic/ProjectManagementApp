import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeaderLayout from "../../layouts/HeaderLayout";
import HeaderButton from "../Buttons/HeaderButton";
import ProjectsList from "./ProjectsList";

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
  const [myProjectsClicked, setMyProjectsClicked] = useState(false);
  const [otherProjectsClicked, setOtherProjectsClicked] = useState(false);

  const handleMyProjectsClicked = () => {
    setMyProjectsClicked(!myProjectsClicked);
  };

  const handleOtherProjectsClicked = () => {
    setOtherProjectsClicked(!otherProjectsClicked);
  };

  return (
    <HeaderLayout title="User home">
      <div className="flex h-svh w-full">
        <div className="flex h-full w-full mx-6">
          <div className=" h-full flex flex-col justify-items-end bg-bckgrnd-block w-3/12">
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
              {myProjectsClicked && <ProjectsList projects={myProjects} />}
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
              <HeaderButton title="Create project" />
            </div>
          </div>
          <div className="w-9/12">
            <p>Project</p>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default UserHome;
