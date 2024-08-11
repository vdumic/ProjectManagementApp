import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { request } from "../axios/axios_helper";

import ProjectInfoTable from "./ProjectInfoTable";
import UpdateProjectNamePopUp from "./PopUps/UpdateProjectNamePopUp";
import UpdateProjectDescriptionPopUp from "./PopUps/UpdateProjectDescriptionPopUp";
import UpdateProjectStatusPopUp from "./PopUps/UpdateProjectStatusPopUp";
import DeleteProjectPopUp from "./PopUps/DeleteProjectPopUp";
import DeletedProjectPopUp from "./PopUps/DeletedProjectPopUp";

const ProjectInfoView = ({
  project,
  projectChange,
  handleProjectInfoClicked,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const [updateNamePopUp, setUpdateNamePopUp] = useState(false);
  const [updateDescriptionPopUp, setUpdateDescriptionPopUp] = useState(false);
  const [updateStatusPopUp, setUpdateStatusPopUp] = useState(false);
  const [deleteProjectPopUp, setDeleteProjectPopUp] = useState(false);
  const [deletedProjectPopUp, setDeletedProjectPopUp] = useState(false);

  const handleUpdateNameOpen = () => setUpdateNamePopUp(true);
  const handleUpdateDescriptionOpen = () => setUpdateDescriptionPopUp(true);
  const handleUpdateStatusOpen = () => setUpdateStatusPopUp(true);
  const handleDeleteProjectOpen = () => setDeleteProjectPopUp(true);
  const handleDeletedProjectOpen = () => setDeletedProjectPopUp(true);

  const { userId } = useParams();

  const fetchUserRole = useCallback(() => {
    request("GET", `/on_projects/${userId}/${project.projectId}`, {})
      .then((response) => response.data)
      .then((data) => setIsAdmin(data))
      .catch((error) => console.log(error));
  }, [project.projectId, userId]);

  useEffect(() => {
    fetchUserRole();
  }, [projectChange, handleProjectInfoClicked, fetchUserRole]);

  return (
    <div>
      <div className="flex justify-start md:mx-auto">
        <p className="text-xl md:text-2xl text-text-dark font-medium p-2">
          Project details
        </p>
      </div>
      <ProjectInfoTable
        project={project}
        updateName={handleUpdateNameOpen}
        updateDescription={handleUpdateDescriptionOpen}
        updateStatus={handleUpdateStatusOpen}
        isAdmin={isAdmin}
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
      {userId === project.userId && (
        <div className="flex justify-start md:mx-auto p-2">
          <button
            className="bg-bckgrnd-high text-white text-sm md:text-lg border drop-shadow-md px-4 md:px-6 py-2 md:py-3 rounded mr-2"
            onClick={handleDeleteProjectOpen}
          >
            Delete project
          </button>
        </div>
      )}
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
