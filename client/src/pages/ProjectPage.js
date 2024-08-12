import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { request, getAuthToken } from "../axios/axios_helper";

import ProjectHeader from "../components - project page/ProjectHeader";
import ProjectTitle from "../components - project page/ProjectTitle";
import StatusTasksBox from "../components - project page/StatusTasksBox";
import TaskInfo from "../components - project page/TaskInfo";

import CreateStatusPopUp from "../components - project page/PopUps/CreateStatusPopUp";
import CreateTaskPopUp from "../components - project page/PopUps/CreateTaskPopUp";
import CreatedPopUp from "../components - projects list/PopUps/CreatedPopUp";
import FailedCreationPopUp from "../components - projects list/PopUps/FailedCreationPopUp";
import EditTaskPopUp from "../components - project page/PopUps/EditTaskPopUp";
import UpdatePriorityPopUp from "../components - project page/PopUps/UpdatePriorityPopUp";
import UpdateStatusPopUp from "../components - project page/PopUps/UpdateStatusPopUp";
import AssignTaskPopUp from "../components - project page/PopUps/AssignTaskPopUp";
import DeleteTaskPopUp from "../components - project page/PopUps/DeleteTaskPopUp";
import DeleteStatusPopUp from "../components - project page/PopUps/DeleteStatusPopUp";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [task, setTask] = useState(null);
  const [usersOnProject, setUsersOnProject] = useState([]);
  const [statusesToDelete, setStatusesToDelete] = useState([]);
  const [taskClicked, setTaskClicked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stateChanged, setStateChanged] = useState(false);
  const [token, setToken] = useState(getAuthToken());
  const [validToken, setValidToken] = useState(false);

  const [createStatusPopUp, setCreateStatusPopUp] = useState(false);
  const [createTaskPopUp, setCreateTaskPopUp] = useState(false);
  const [createdTaskPopUpOpened, setCreatedTaskPopUpOpened] = useState(false);
  const [failedTaskPopUpOpened, setFailedTaskPopUpOpened] = useState(false);
  const [editTaskPopUp, setEditTaskPopUp] = useState(false);
  const [updatePriorityPopUp, setUpdatePriorityPopUp] = useState(false);
  const [updateStatusPopUp, setUpdateStatusPopUp] = useState(false);
  const [assignUserPopUp, setAssignUserPopUp] = useState(false);
  const [deleteTaskPopUp, setDeleteTaskPopUp] = useState(false);
  const [deleteStatusPopUp, setDeleteStatusPopUp] = useState(false);

  const { userId, projectId } = useParams();
  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    request("GET", `/projects/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setProject(data))
      .catch((error) => console.log(error));

    request("GET", `/project_statuses/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setStatuses(data))
      .catch((error) => console.log(error));

    request("GET", `/priorities`, {})
      .then((response) => response.data)
      .then((data) => setPriorities(data))
      .catch((error) => console.log(error));

    request("GET", `/users_on_project/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setUsersOnProject(data))
      .catch((error) => console.log(error));

    request("GET", `/tasks`, {})
      .then((response) => response.data)
      .then((data) => {
        setTask(data[0]);
      })
      .catch((error) => console.log(error));

    request("GET", `/on_projects/${userId}/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setIsAdmin(data))
      .catch((error) => console.log(error));

    request("GET", `/project_statuses/to_delete/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setStatusesToDelete(data))
      .catch((error) => console.log(error));
  }, [projectId, userId]);

  const checkToken = useCallback(() => {
    request("GET", `/validation/${token}`, {})
      .then((response) => response.data)
      .then((data) => setValidToken(data))
      .catch((error) => console.log(error));
  }, [token]);

  useEffect(() => {
    setToken(getAuthToken());
    checkToken();

    if (!validToken) {
      navigate("/");
    }

    fetchData();
  }, [fetchData, stateChanged, checkToken, validToken, navigate]);

  const handleCreateStatusClicked = () => {
    setCreateStatusPopUp(true);
  };

  const handleCreateTaskClicked = () => {
    setCreateTaskPopUp(true);
  };

  const handleOpenCreatedTaskPopUp = () => {
    setCreatedTaskPopUpOpened(true);
    setCreateTaskPopUp(false);
  };

  const handleCloseCreatedTaskPopUp = () => {
    setCreatedTaskPopUpOpened(false);
  };

  const handleOpenFailedTaskPopUp = () => {
    setFailedTaskPopUpOpened(true);
    setCreateTaskPopUp(false);
  };

  const handleCloseFailedTaskPopUp = () => {
    setFailedTaskPopUpOpened(false);
  };

  const handleEditTaskClicked = () => {
    setEditTaskPopUp(true);
  };

  const handleUpdatePriorityClicked = () => {
    setUpdatePriorityPopUp(true);
  };

  const handleUpdateStatusClicked = () => {
    setUpdateStatusPopUp(true);
  };

  const handleAssignUserClicked = () => {
    setAssignUserPopUp(true);
  };

  const handleTaskClicked = (task) => {
    setTaskClicked(true);
    setTask(task);
  };

  const handleDeleteTaskClicked = () => {
    setDeleteTaskPopUp(true);
  };

  const handleDeleteStatusClicked = () => {
    setDeleteStatusPopUp(true);
  };

  return (
    <div className="h-screen flex">
      <div className="w-full h-full bg-bckgrnd-main flex-col justify-start">
        <div className="border-b-2 border-b-bckgrnd-blue_dark">
          <ProjectHeader userId={userId} />
          <ProjectTitle
            project={project}
            handleCreateStatus={handleCreateStatusClicked}
            handleCreateTask={handleCreateTaskClicked}
            handleDeleteStatus={handleDeleteStatusClicked}
          />
        </div>
        <div
          className={
            taskClicked
              ? "flex justify-between h-5/6 overflow-auto mx-14"
              : "flex h-5/6 overflow-auto mx-14"
          }
        >
          <div
            className={
              taskClicked
                ? "flex flex-row w-3/4 overflow-x-auto"
                : "flex flex-row justify-start w-4/5"
            }
          >
            {statuses.map((status) => {
              return (
                <StatusTasksBox
                  key={status.statusId}
                  status={status}
                  selectTask={handleTaskClicked}
                  stateChanged={stateChanged}
                />
              );
            })}
          </div>
          <div className="w-1/4 h-5/6 bg-transparent ml-6">
            {taskClicked === true && (
              <TaskInfo
                task={task}
                handleEditTask={handleEditTaskClicked}
                handleUpdatePriority={handleUpdatePriorityClicked}
                handleUpdateStatus={handleUpdateStatusClicked}
                handleAssignUser={handleAssignUserClicked}
                handleDeleteTask={handleDeleteTaskClicked}
                closeTaskInfo={() => setTaskClicked(false)}
                stateChanged={stateChanged}
                isAdmin={isAdmin}
              />
            )}
          </div>
        </div>
      </div>
      <CreateStatusPopUp
        openPopUp={createStatusPopUp}
        closePopUp={() => setCreateStatusPopUp(false)}
        projectChange={() => setStateChanged(!stateChanged)}
      />
      <CreateTaskPopUp
        openPopUp={createTaskPopUp}
        closePopUp={() => setCreateTaskPopUp(false)}
        openCreatedTaskPopUp={handleOpenCreatedTaskPopUp}
        openFailedTaskPopUp={handleOpenFailedTaskPopUp}
        priorities={priorities}
        statuses={statuses}
        projectChange={() => setStateChanged(!stateChanged)}
      />
      <CreatedPopUp
        openPopUp={createdTaskPopUpOpened}
        closePopUp={handleCloseCreatedTaskPopUp}
        title="Task"
      />
      <FailedCreationPopUp
        openPopUp={failedTaskPopUpOpened}
        closePopUp={handleCloseFailedTaskPopUp}
        title="Task"
      />
      <EditTaskPopUp
        openPopUp={editTaskPopUp}
        closePopUp={() => setEditTaskPopUp(false)}
        task={task}
        projectChange={() => setStateChanged(!stateChanged)}
      />
      <UpdatePriorityPopUp
        openPopUp={updatePriorityPopUp}
        closePopUp={() => setUpdatePriorityPopUp(false)}
        task={task}
        priorities={priorities}
        projectChange={() => setStateChanged(!stateChanged)}
      />
      <UpdateStatusPopUp
        openPopUp={updateStatusPopUp}
        closePopUp={() => setUpdateStatusPopUp(false)}
        task={task}
        statuses={statuses}
        projectChange={() => setStateChanged(!stateChanged)}
      />
      <AssignTaskPopUp
        openPopUp={assignUserPopUp}
        closePopUp={() => setAssignUserPopUp(false)}
        task={task}
        users={usersOnProject}
        projectChange={fetchData}
        setStateChanged={() => {
          setStateChanged(!stateChanged);
          setTaskClicked(false);
        }}
      />
      <DeleteTaskPopUp
        task={task}
        openPopUp={deleteTaskPopUp}
        closePopUp={() => setDeleteTaskPopUp(false)}
        projectChange={() => setStateChanged(!stateChanged)}
      />
      <DeleteStatusPopUp
        statuses={statusesToDelete}
        openPopUp={deleteStatusPopUp}
        closePopUp={() => setDeleteStatusPopUp(false)}
        setStateChanged={() => setStateChanged(!stateChanged)}
      />
    </div>
  );
};

export default ProjectPage;
