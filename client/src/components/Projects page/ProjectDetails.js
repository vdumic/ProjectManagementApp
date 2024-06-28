import OpenBoardButton from "../Buttons/OpenBoardButton";
import MembersList from "./MembersList";
import TasksList from "./TasksList";

const members = [
  {
    fullName: "Amelia Price",
  },
  {
    fullName: "Mia Jenkins",
  },
  {
    fullName: "Jacob Evans",
  },
  {
    fullName: "Harper Reed",
  },
];

const tasks = [
  {
    name: "Create wireframes and mockups",
  },
  {
    name: "Design user-friendly navigation and intuitive interactions",
  },
  {
    name: "Upgrade server infrastructure",
  },
  {
    name: "Add new feature for in-app messaging",
  },
  {
    name: "Update user documentation and help guides",
  },
  {
    name: "Document API endpoints and data schemas",
  },
];

const ProjectDetails = () => {
  return (
    <div className="flex h-full mx-20 my-12">
      <div className="flex h-full w-full flex-wrap justify-start">
        <div className="flex items-stretch justify-between h-fit w-full">
          <h1 className="text-text-dark font-bold text-2xl">
            Software development: Mobile App Upgrade
          </h1>
          <OpenBoardButton title="Open board" />
        </div>
        <div className="flex flex-col h-full my-14">
          <div className="mb-14">
            <h1 className="text-text-dark font-bold text-xl mr-2 mb-2">
              Project members
            </h1>
            <MembersList members={members} />
          </div>
          <div className="mb-14">
            <h1 className="text-text-dark font-bold text-xl mr-2 mb-2">
              Tasks overview
            </h1>
            <TasksList tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
