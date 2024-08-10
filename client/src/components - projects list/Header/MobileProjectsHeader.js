import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MobileProjectsHeader = ({
  project,
  activeProjects,
  oldProjects,
  setChosenProject,
  handleProjectInfoClicked,
}) => {
  const [isProjectListOpen, setIsProjectListOpen] = useState(false);

  const { userId } = useParams();

  const handleProjectClicked = () => {
    setIsProjectListOpen(!isProjectListOpen);
  };

  return (
    <div className="md:hidden max-w-full mx-auto px-8 shadow-md">
      <div className="flex items-center justify-between w-5/6 py-3">
        <div className="flex items-center justify-between mr-8">
          <p
            className="font-medium text-text-dark text-lg text-nowrap"
            onClick={handleProjectClicked}
          >
            {project.projectName}
          </p>
        </div>
        <div className="flex items-center justify-between">
          {(activeProjects.length !== 0 || oldProjects.length !== 0) && (
            <Link
              to={`/projects/${userId}/${project.projectId}`}
              className="bg-white rounded border-2 border-gray-500"
            >
              <p className="py-0.5 px-4 text-text-dark font-medium text-nowrap">
                Open project
              </p>
            </Link>
          )}
        </div>
      </div>
      {isProjectListOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20"
          onClick={handleProjectClicked}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <ul className="space-y-3">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Active projects
                </h2>
                {activeProjects.map((project) => (
                  <li key={project.projectId}>
                    <p
                      className="block text-text-dark text-center"
                      onClick={() => {
                        setChosenProject(project);
                        handleProjectClicked();
                        handleProjectInfoClicked();
                      }}
                    >
                      {project.projectName}
                    </p>
                  </li>
                ))}
                <h2 className="text-xl font-semibold text-center mb-4">
                  Old projects
                </h2>
                {oldProjects.map((project) => (
                  <li key={project.projectId}>
                    <p
                      className="block text-text-dark text-center"
                      onClick={() => {
                        setChosenProject(project);
                        handleProjectClicked();
                        handleProjectInfoClicked();
                      }}
                    >
                      {project.projectName}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileProjectsHeader;
