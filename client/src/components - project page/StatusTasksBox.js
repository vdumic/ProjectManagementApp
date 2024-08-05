import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { request } from "../axios/axios_helper";
import TasksColumn from "./TasksColumn";

const StatusTasksBox = ({ status, selectTask }) => {
  const { userId, projectId } = useParams();
  const [tasks, setTasks] = useState([]);

  const fetchStatusTasks = async () => {
    request("GET", `/tasks/status/${projectId}/${status.statusId}`, {})
      .then((response) => response.data)
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchStatusTasks();
  }, []);

  return (
    <div className="flex h-full flex-col justify-start w-1/5 mx-4 pt-6">
      <h1 className="text-text-dark text-xl font-medium mb-4 break-normal text-nowrap">
        {status.status}
      </h1>
      {tasks.length !== 0 && (
        <TasksColumn tasks={tasks} selectTask={selectTask} />
      )}
      {tasks.length === 0 && <div>No tasks</div>}
    </div>
  );
};

export default StatusTasksBox;
