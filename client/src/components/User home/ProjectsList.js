const ProjectsList = ({ projects }) => {
  return (
    <div className="ml-3 overflow-auto h-64">
      {projects.map((project) => {
        return (
          <button className="text-text-dark my-2 text-lg text-start">
            {project.name}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectsList;
