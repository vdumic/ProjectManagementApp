import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { request } from "../axios/axios_helper";

import TasksColumn from "./TasksColumn";

const StatusTasksBox = ({ status, selectTask, stateChanged }) => {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);

  const fetchStatusTasks = useCallback(() => {
    request("GET", `/tasks/status/${projectId}/${status.statusId}`, {})
      .then((response) => response.data)
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  }, [projectId, status.statusId]);

  useEffect(() => {
    fetchStatusTasks();
  }, [fetchStatusTasks, stateChanged]);

  return (
    <div className="flex h-full flex-col justify-start w-full md:w-1/5 mx-0 md:mx-4 pt-10">
      <h1 className="text-text-dark text-xl font-medium mb-4 break-normal text-nowrap">
        {status.status}
      </h1>
      {tasks.length !== 0 && (
        <TasksColumn tasks={tasks} selectTask={selectTask} />
      )}
      {tasks.length === 0 && <div className="text-nowrap">No tasks</div>}
    </div>
  );
};

export default StatusTasksBox;
