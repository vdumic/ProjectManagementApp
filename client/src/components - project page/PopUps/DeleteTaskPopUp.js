import { useParams } from "react-router-dom";

import { request } from "../../axios/axios_helper";

const DeleteTaskPopUp = ({ task, openPopUp, closePopUp, projectChange }) => {
  const { userId } = useParams();

  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  const handleDeleteTask = async () => {
    request("DELETE", `/tasks/${task.taskId}/${userId}`, {})
      .then(() => {
        closePopUp();
        projectChange();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="ModelContainer"
      onClick={handleClosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold py-3 text-center text-xl">
            Are you sure you want to delete task?
          </h2>
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
              onClick={handleDeleteTask}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskPopUp;
