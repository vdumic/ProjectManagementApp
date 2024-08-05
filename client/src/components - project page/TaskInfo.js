import { IoIosClose } from "react-icons/io";
import { GoAlert } from "react-icons/go";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { LiaFilePowerpointSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

import DateFormat from "../functions/DateFormat";
import Capitalize from "../functions/Capitalize";

const TaskInfo = ({
  task,
  handleEditTask,
  handleUpdatePriority,
  handleUpdateStatus,
  handleAssignUser,
  closeTaskInfo
}) => {
  const bckgrnd = "bg-bckgrnd-" + task.priorityName.toLowerCase();

  return (
    <div className="flex flex-col justify-between w-full h-full border-2 border-bckgrnd-blue_dark mt-10 bg-bckgrnd-task">
      <div>
        <div className="m-6">
          <div className="flex flex-row justify-between my-2">
            <p className="font-bold text-lg text-text-dark">{task.taskName}</p>
            <button onClick={closeTaskInfo}>
              <IoIosClose className="h-7 w-7" />
            </button>
          </div>
          <div className="flex flex-row mb-8">
            <p className="text-wrap">{task.description}</p>
          </div>
          <div className="flex flex-row my-4 align-middle justify-between">
            <div className="flex flex-row">
              <GoAlert className="h-7 w-7" />
              <div
                className={`w-fit h-fit mt-1 ${bckgrnd} px-4 py-0.5 rounded-xl text-white text-sm ml-4`}
              >
                {Capitalize(task.priorityName)}
              </div>
            </div>
            <button
              className="bg-white rounded-full border-2 border-gray-500 shadow-lg"
              onClick={handleUpdatePriority}
            >
              <p className="py-0.5 px-4 text-text-dark font-medium text-center text-sm">
                Update priority
              </p>
            </button>
          </div>
          <div className="flex flex-row my-4 align-middle justify-between">
            <div className="flex flex-row">
              <MdOutlineAssignmentInd className="h-7 w-7" />
              <p className="ml-4">
                {task.assignedTo != null ? task.assignedTo : "Not assigned"}
              </p>
            </div>
            <button
              className="bg-white rounded-full border-2 border-gray-500 shadow-lg"
              onClick={handleAssignUser}
            >
              <p className="py-0.5 px-4 text-text-dark font-medium text-center text-sm">
                Assign task
              </p>
            </button>
          </div>
          <div className="flex flex-row my-4 align-middle justify-between">
            <div className="flex flex-row">
              <GoTasklist className="h-7 w-7" />
              <p className="ml-4">{task.statusName}</p>
            </div>
            <button
              className="bg-white rounded-full border-2 border-gray-500 shadow-lg"
              onClick={handleUpdateStatus}
            >
              <p className="py-0.5 px-4 text-text-dark font-medium text-center text-sm">
                Update status
              </p>
            </button>
          </div>
          <div className="flex flex-row my-4 align-middle">
            <LiaFilePowerpointSolid className="h-7 w-7" />
            <p className="ml-4">Story points: {task.storyPoints}</p>
          </div>
          <div className="flex flex-row my-4 align-middle">
            <IoCalendarOutline className="h-7 w-7" />
            <p className="ml-4">
              Start date:
              {task.startDate != null ? DateFormat(task.startDate) : "-"}
            </p>
          </div>
          <div className="flex flex-row my-4 align-middle">
            <IoCalendarOutline className="h-7 w-7" />
            <p className="ml-4">
              End date:
              {task.endDate != null ? DateFormat(task.endDate) : "-"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <button
          className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-40 mx-6"
          onClick={handleEditTask}
        >
          <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
            Edit task
          </p>
        </button>
      </div>
    </div>
  );
};

export default TaskInfo;
