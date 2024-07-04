import { useEffect, useState } from "react";
import StatusLine from "./StatusLine";

const TasksView = ({ project }) => {
  const [statuses, setStatuses] = useState([]);

  const fetchStatuses = async (projectId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/project_statuses/${projectId}`
      );

      if (response.ok) {
        const data = await response.json();
        setStatuses(data);
      } else {
        console.error("Failed to fetch statuses:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const projectId = project.projectId;
    fetchStatuses(projectId);
  }, []);

  return (
    <div>
      {statuses.map((status) => {
        return <StatusLine status={status} project={project} />;
      })}
    </div>
  );
};

export default TasksView;
