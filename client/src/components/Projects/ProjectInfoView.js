import ProjectInfoTable from "./ProjectInfoTable";

const ProjectInfoView = ({ project }) => {
  return (
    <div>
      <div className="flex justify-start mx-auto p-4">
        <p className="text-2xl py-3 text-text-dark font-medium">
          Project details
        </p>
      </div>
      <ProjectInfoTable project={project} />
    </div>
  );
};

export default ProjectInfoView;
