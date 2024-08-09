import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { request } from "../axios/axios_helper";

const StatusLine = ({ status, project }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    request("GET", `/tasks/status/${project.projectId}/${status.statusId}`, {})
      .then((response) => response.data)
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex h-full flex-col justify-start w-1/5 mx-4">
      <div className="text-text-dark text-lg font-medium mb-4 break-normal text-nowrap">
        {status.status}
      </div>
      <div className="flex flex-col w-full justify-start h-3/4">
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
