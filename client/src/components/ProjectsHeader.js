import { Link } from "react-router-dom";
import userIcon from "../assets/user_icon.png";

const ProjectsHeader = () => {
  return (
    <header className="w-full bg-bckgrnd-blue_light">
      <main className="max-w-full flex-grow flex flex-col py-3 mx-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-between mr-8">
              <p className="font-medium text-text-dark text-2xl">
                Website Redesign for Cleaning Company
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Link
                to="/project-board"
                className="bg-white rounded-full border-2 border-gray-500 shadow-lg"
              >
                <p className="text-lg py-0.5 px-4 text-text-dark font-medium">
                  Open project
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between ml-44">
            <Link to="/profile">
              <img
                src={userIcon}
                alt="User icon"
                height="45"
                width="45"
                className="bg-bckgrnd-main rounded-full"
              />
            </Link>
          </div>
        </div>
      </main>
    </header>
  );
};

export default ProjectsHeader;
