import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeaderLayout from "../../layouts/HeaderLayout";
import HeaderButton from "../Buttons/HeaderButton";

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
            <div className="m-8">
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
              {myProjectsClicked && (
                <div className="ml-2 overflow-auto h-64">
                  <button className="text-text-dark my-2 text-lg text-start">
                    Website Redesign for Cleaning Company
                  </button>
                  <button className="text-text-dark my-2 text-lg text-start">
                    Software Development: Mobile App Upgrade
                  </button>
                  <button className="text-text-dark my-2 text-lg text-start">
                    Website Redesign for Cleaning Company
                  </button>
                </div>
              )}
            </div>
            <div className="m-8">
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
                <div className="ml-2 overflow-auto h-64">
                  <button className="text-text-dark my-2 text-lg text-start">
                    Website Redesign for Cleaning Company
                  </button>
                  <button className="text-text-dark my-2 text-lg text-start">
                    Software Development: Mobile App Upgrade
                  </button>
                  <button className="text-text-dark my-2 text-lg text-start">
                    Website Redesign for Cleaning Company
                  </button>
                </div>
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
