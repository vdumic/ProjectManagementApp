import { Link } from "react-router-dom";

const ProjectTitle = ({ project }) => {
  return (
    <div className="flex items-center justify-start mx-28 my-8">
      <div className="flex items-center justify-between mr-8">
        <p className="font-medium text-text-dark text-2xl text-nowrap">
          {project.name}
        </p>
      </div>
      <div className="flex flex-grow items-center justify-end">
        <Link
          to={`/projects/${project.projectId}`}
          className="bg-white rounded border-2 border-gray-500 shadow-lg w-40 mx-6"
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Create status
          </p>
        </Link>
        <Link
          to={`/projects/${project.projectId}`}
          className="bg-white rounded border-2 border-gray-500 shadow-lg w-40 mx-6"
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Create task
          </p>
        </Link>
        <Link
          to={`/projects/${project.projectId}`}
          className="bg-white rounded border-2 border-gray-500 shadow-lg w-40 mx-6"
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Add user
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectTitle;
