import { useEffect } from "react";

import { IoIosClose } from "react-icons/io";
import { GoAlert, GoTasklist } from "react-icons/go";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { LiaFilePowerpointSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

import Capitalize from "../functions/Capitalize";
import TimestampFormat from "../functions/TimestampFormat";

const TaskInfo = ({
  task,
  handleEditTask,
  handleUpdatePriority,
  handleUpdateStatus,
  handleAssignUser,
  handleDeleteTask,
  closeTaskInfo,
  stateChanged,
  isAdmin,
}) => {
  const bckgrnd = "bg-bckgrnd-" + task.priorityName.toLowerCase();

  useEffect(() => {}, [stateChanged]);

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
            {isAdmin && (
              <button
                className="bg-white rounded-full border-2 border-gray-500 shadow-lg"
                onClick={handleUpdatePriority}
              >
                <p className="py-0.5 px-4 text-text-dark font-medium text-center text-sm">
                  Update priority
                </p>
              </button>
            )}
          </div>
          <div className="flex flex-row my-4 align-middle justify-between">
            <div className="flex flex-row">
              <MdOutlineAssignmentInd className="h-7 w-7" />
              <p className="ml-4">
                {task.assignedTo != null ? task.assignedTo : "Not assigned"}
              </p>
            </div>
            {isAdmin && (
              <button
                className="bg-white rounded-full border-2 border-gray-500 shadow-lg"
                onClick={handleAssignUser}
              >
                <p className="py-0.5 px-4 text-text-dark font-medium text-center text-sm">
                  Assign task
                </p>
              </button>
            )}
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
              {task.startDate != null
                ? ` ${TimestampFormat(task.startDate)}`
                : " -"}
            </p>
          </div>
          <div className="flex flex-row my-4 align-middle">
            <IoCalendarOutline className="h-7 w-7" />
            <p className="ml-4">
              Updated at:
              {task.updatedAt != null
                ? ` ${TimestampFormat(task.updatedAt)}`
                : " -"}
            </p>
          </div>
          <div className="flex flex-row my-4 align-middle">
            <IoCalendarOutline className="h-7 w-7" />
            <p className="ml-4">
              End date:
              {task.endDate != null
                ? ` ${TimestampFormat(task.endDate)}`
                : " -"}
            </p>
          </div>
        </div>
      </div>
      {isAdmin && (
        <div className="flex-col justify-start mb-6">
        <div className="flex justify-center mb-3">
          <button
            className="bg-white rounded-full border-2 border-gray-500 shadow-lg w-40 mx-6"
            onClick={handleEditTask}
          >
            <p className="text-lg py-0.5 px-4 text-text-dark font-medium text-center">
              Edit task
            </p>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-bckgrnd-high rounded-full border-2 border-bckgrnd-high shadow-lg w-40 mx-6"
            onClick={handleDeleteTask}
          >
            <p className="text-lg py-0.5 px-4 text-white font-medium text-center">
              Delete task
            </p>
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default TaskInfo;
