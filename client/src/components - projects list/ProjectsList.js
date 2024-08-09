const ProjectsList = ({
  activeProjects,
  oldProjects,
  chosenProject,
  setChosenProject,
  handleProjectInfoClicked,
}) => {
  return (
    <>
      <div className="flex flex-col justify-start mx-8 my-6 h-4/5 overflow-y-auto">
        <p className="text-2xl text-bckgrnd-main font-medium">Projects</p>
        <div className="flex flex-col justify-start my-5 overflow-y-auto">
          {activeProjects.map((project) => {
            const isChosen = project.projectName === chosenProject.projectName;
            return (
              <button
                className={`text-lg text-bckgrnd-main text-start ${
                  isChosen ? "underline font-medium" : ""
                }`}
                key={project.projectId}
                onClick={() => {
                  setChosenProject(project);
                  handleProjectInfoClicked();
                }}
              >
                {project.projectName}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-start mx-8 my-6 h-3/5 overflow-y-auto">
        <p className="text-2xl text-bckgrnd-main font-medium">Old projects</p>
        <div className="flex flex-col justify-start my-5 overflow-y-auto">
          {oldProjects.map((project) => {
            const isChosen = project.projectName === chosenProject.projectName;
            return (
              <button
                className={`text-lg text-bckgrnd-main text-start ${
                  isChosen ? "underline font-medium" : ""
                }`}
                key={project.projectId}
                onClick={() => setChosenProject(project)}
              >
                {project.projectName}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProjectsList;
