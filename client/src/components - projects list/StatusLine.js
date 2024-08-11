import { useEffect, useState, useCallback } from "react";

import { request } from "../axios/axios_helper";

import TaskCard from "./TaskCard";

const StatusLine = ({ status, project }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(() => {
    request("GET", `/tasks/status/${project.projectId}/${status.statusId}`, {})
      .then((response) => response.data)
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  }, [project.projectId, status.statusId]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="flex h-full flex-col justify-start sm:w-2/5 md:w-1/5 mx-4">
      <div className="text-text-dark text-lg font-medium mb-4 break-normal text-nowrap">
        {status.status}
      </div>
      <div className="flex flex-row md:flex-col w-full justify-start h-3/4">
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              title={task.taskName}
              priority={task.priorityName}
              assignee={task.assignedTo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatusLine;
