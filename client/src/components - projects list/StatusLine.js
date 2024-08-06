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
    <div className="mb-12">
      <div className="text-text-dark font-medium text-lg mb-4">
        {status.status}
      </div>
      <div className="flex justify-start">
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              title={task.taskName}
              priority={task.priorityName}
              isAssigned={task.assignedTo}
              assignee={task.assignedTo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatusLine;
