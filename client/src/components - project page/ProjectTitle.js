const ProjectTitle = ({
  project,
  handleCreateStatus,
  handleCreateTask,
  handleDeleteStatus,
}) => {
  return (
    <div className="flex items-center justify-center mx-20 my-2">
      <div className="flex-col items-center justify-between mr-8">
        <p className="font-medium text-text-dark text-2xl text-nowrap">
          {project.name}
        </p>
        <p className="text-text-dark text-lg">{project.description}</p>
      </div>
      <div className="flex flex-grow items-center justify-end">
        <button
          className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleCreateTask}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Create task
          </p>
        </button>
        <button
          className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleCreateStatus}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Create status
          </p>
        </button>
        <button
          className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleDeleteStatus}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Delete status
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProjectTitle;
