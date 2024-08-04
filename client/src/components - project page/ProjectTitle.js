import { Link } from "react-router-dom";

const ProjectTitle = ({
  project,
  handleAddUser,
  handleCreateStatus,
  handleCreateTask,
}) => {
  return (
    <div className="flex items-center justify-start mx-28 my-8">
      <div className="flex items-center justify-between mr-8">
        <p className="font-medium text-text-dark text-2xl text-nowrap">
          {project.name}
        </p>
      </div>
      <div className="flex flex-grow items-center justify-end">
        <button
          className="bg-white rounded border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleCreateStatus}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Create status
          </p>
        </button>
        <button
          className="bg-white rounded border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleCreateTask}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Create task
          </p>
        </button>
        <button
          className="bg-white rounded border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleAddUser}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Add user
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProjectTitle;
