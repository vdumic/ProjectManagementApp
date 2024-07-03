const UpdateProjectStatusPopUp = ({
  project,
  openPopUp,
  closePopUp,
  projectChange,
}) => {
  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  const handleActivateProject = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/projects/activate/${project.projectId}/72516c5b-6454-4e26-ae1b-a019e03dd9db`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Project updated successfully:", data);
        closePopUp();
        projectChange();
      } else {
        console.error("Failed to update project:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeactivateProject = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/projects/deactivate/${project.projectId}/72516c5b-6454-4e26-ae1b-a019e03dd9db`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Project updated successfully:", data);
        closePopUp();
        projectChange();
      } else {
        console.error("Failed to update project:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      id="ModelContainer"
      onClick={handleClosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          {project.active && (
            <h2 className="font-semibold py-3 text-center text-xl">
              Are you sure you want to deactivate the project?
            </h2>
          )}
          {!project.active && (
            <h2 className="font-semibold py-3 text-center text-xl">
              Are you sure you want to activate the project?
            </h2>
          )}
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-8"
              onClick={closePopUp}
            >
              Cancel
            </button>
            <button
              className="bg-bckgrnd-high text-white border drop-shadow-md px-6 py-1 rounded"
              onClick={() => {
                if (project.active) {
                  handleDeactivateProject();
                } else {
                  handleActivateProject();
                }
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProjectStatusPopUp;
