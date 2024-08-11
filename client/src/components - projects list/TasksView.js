import { useEffect, useState, useCallback } from "react";

import { request } from "../axios/axios_helper";

import StatusLine from "./StatusLine";

const TasksView = ({ project }) => {
  const [statuses, setStatuses] = useState([]);

  const fetchStatuses = useCallback(() => {
    request("GET", `/project_statuses/${project.projectId}`, {})
      .then((response) => response.data)
      .then((data) => setStatuses(data))
      .catch((error) => console.log(error));
  }, [project.projectId]);

  useEffect(() => {
    fetchStatuses();
  }, [fetchStatuses]);

  return (
    <div className="flex flex-col md:flex-row justify-start w-full h-screen md:h-auto overflow-auto">
      {statuses.map((status) => (
        <StatusLine key={status.statusId} status={status} project={project} />
      ))}
    </div>
  );
};

export default TasksView;
