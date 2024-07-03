import { useState } from "react";
import ProjectInfoTable from "./ProjectInfoTable";
import UpdateProjectNamePopUp from "../PopUps/UpdateProjectNamePopUp";
import UpdateProjectDescriptionPopUp from "../PopUps/UpdateProjectDescriptionPopUp";
import UpdateProjectStatusPopUp from "../PopUps/UpdateProjectStatusPopUp";

const ProjectInfoView = ({ project, projectChange }) => {
  const [updateNamePopUp, setUpdateNamePopUp] = useState(false);
  const [updateDescriptionPopUp, setUpdateDescriptionPopUp] = useState(false);
  const [updateStatusPopUp, setUpdateStatusPopUp] = useState(false);

  const handleUpdateNameOpen = () => {
    setUpdateNamePopUp(true);
  };

  const handleUpdateDescriptionOpen = () => {
    setUpdateDescriptionPopUp(true);
  };

  const handleUpdateStatusOpen = () => {
    setUpdateStatusPopUp(true);
  };

  return (
    <div>
      <div className="flex justify-start mx-auto p-4">
        <p className="text-2xl py-3 text-text-dark font-medium">
          Project details
        </p>
      </div>
      <ProjectInfoTable
        project={project}
        updateName={handleUpdateNameOpen}
        updateDescription={handleUpdateDescriptionOpen}
        updateStatus={handleUpdateStatusOpen}
      />
      <UpdateProjectNamePopUp
        project={project}
        openPopUp={updateNamePopUp}
        closePopUp={() => setUpdateNamePopUp(false)}
        projectChange={projectChange}
      />
      <UpdateProjectDescriptionPopUp
        project={project}
        openPopUp={updateDescriptionPopUp}
        closePopUp={() => setUpdateDescriptionPopUp(false)}
        projectChange={projectChange}
      />
      <UpdateProjectStatusPopUp
        project={project}
        openPopUp={updateStatusPopUp}
        closePopUp={() => setUpdateStatusPopUp(false)}
        projectChange={projectChange}
      />
    </div>
  );
};

export default ProjectInfoView;
