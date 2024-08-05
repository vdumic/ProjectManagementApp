import { useEffect, useState } from "react";
import StatusLine from "./StatusLine";
import { request } from "../axios/axios_helper";

const TasksView = ({ project }) => {
  const [statuses, setStatuses] = useState([]);

  const fetchStatuses = async () => {
    request("GET", `/project_statuses/${project.projectId}`, {})
      .then((response) => response.data)
      .then((data) => setStatuses(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchStatuses();
  }, []);

  return (
    <div>
      {statuses.map((status) => {
        return (
          <StatusLine key={status.statusId} status={status} project={project} />
        );
      })}
    </div>
  );
};

export default TasksView;
