import { useState } from "react";
import ProjectInfoTable from "./ProjectInfoTable";
import UpdateProjectNamePopUp from "../PopUps/UpdateProjectNamePopUp";
import UpdateProjectDescriptionPopUp from "../PopUps/UpdateProjectDescriptionPopUp";
import UpdateProjectStatusPopUp from "../PopUps/UpdateProjectStatusPopUp";
import DeleteProjectPopUp from "../PopUps/DeleteProjectPopUp";
import DeletedProjectPopUp from "../PopUps/DeletedProjectPopUp";

const ProjectInfoView = ({ project, projectChange }) => {
  const [updateNamePopUp, setUpdateNamePopUp] = useState(false);
  const [updateDescriptionPopUp, setUpdateDescriptionPopUp] = useState(false);
  const [updateStatusPopUp, setUpdateStatusPopUp] = useState(false);
  const [deleteProjectPopUp, setDeleteProjectPopUp] = useState(false);
  const [deletedProjectPopUp, setDeletedProjectPopUp] = useState(false);

  const handleUpdateNameOpen = () => {
    setUpdateNamePopUp(true);
  };

  const handleUpdateDescriptionOpen = () => {
    setUpdateDescriptionPopUp(true);
  };

  const handleUpdateStatusOpen = () => {
    setUpdateStatusPopUp(true);
  };

  const handleDeleteProjectOpen = () => {
    setDeleteProjectPopUp(true);
  };

  const handleDeletedProjectOpen = () => {
    setDeletedProjectPopUp(true);
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
      <div className="flex justify-start mx-auto p-4">
        <button
          className="bg-bckgrnd-high text-white text-lg border drop-shadow-md px-6 py-3 rounded mr-2"
          onClick={handleDeleteProjectOpen}
        >
          Delete project
        </button>
      </div>
      <DeleteProjectPopUp
        project={project}
        openPopUp={deleteProjectPopUp}
        closePopUp={() => setDeleteProjectPopUp(false)}
        projectChange={projectChange}
        openDeletedProjectPopUp={handleDeletedProjectOpen}
      />
      <DeletedProjectPopUp
        openPopUp={deletedProjectPopUp}
        closePopUp={() => setDeletedProjectPopUp(false)}
      />
    </div>
  );
};

export default ProjectInfoView;
