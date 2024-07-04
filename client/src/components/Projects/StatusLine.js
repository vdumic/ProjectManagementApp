import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const StatusLine = ({ status, project }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/tasks/status/${project.projectId}/${status.statusId}`
      );

      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.error("Failed to fetch tasks:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
