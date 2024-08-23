const ProjectTitle = ({
  project,
  statuses,
  isAdmin,
  handleCreateStatus,
  handleCreateTask,
  handleDeleteStatus,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-4 lg:mx-24 my-2">
      <div className="flex flex-col items-center lg:items-start justify-between mb-4 lg:mb-0 lg:mr-8 text-center lg:text-left">
        <p className="font-medium text-text-dark text-xl lg:text-2xl text-nowrap">
          {project.name}
        </p>
        <p className="text-text-dark text-base lg:text-lg">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-grow items-center justify-center lg:justify-end">
        {isAdmin && (
          <button
            className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-fit md:w-40 my-2 lg:my-0 lg:mx-6"
            onClick={handleCreateTask}
          >
            <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
              Create task
            </p>
          </button>
        )}
        {isAdmin && (
          <button
            className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-fit md:w-40 my-2 lg:my-0 lg:mx-6"
            onClick={handleCreateStatus}
          >
            <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
              Create status
            </p>
          </button>
        )}
        {isAdmin && statuses.length > 3 && (
          <button
            className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-fit md:w-40 my-2 lg:my-0 lg:mx-6"
            onClick={handleDeleteStatus}
          >
            <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
              Delete status
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectTitle;
