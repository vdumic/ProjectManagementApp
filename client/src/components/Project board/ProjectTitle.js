import CreateButton from "../Buttons/CreateButton";

const ProjectTitle = ({ title }) => {
  return (
    <div className="flex items-stretch justify-between h-fit w-full">
      <h1 className="text-text-dark font-bold text-2xl">{title}</h1>
      <div>
        <CreateButton title="Create task" />
        <CreateButton title="Create status" />
      </div>
    </div>
  );
};

export default ProjectTitle;
