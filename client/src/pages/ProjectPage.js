import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components - project page/ProjectHeader";
import ProjectTitle from "../components - project page/ProjectTitle";
import StatusTasksBox from "../components - project page/StatusTasksBox";
import { request } from "../axios/axios_helper";
import AddNewUserPopUp from "../components - projects list/PopUps/AddNewUserPopUp";
import NoUsersToAddPopUp from "../components - projects list/PopUps/NoUsersToAddPopUp";
import CreateStatusPopUp from "../components - project page/PopUps/CreateStatusPopUp";
import CreateTaskPopUp from "../components - project page/PopUps/CreateTaskPopUp";
import CreatedPopUp from "../components - projects list/PopUps/CreatedPopUp";
import FailedCreationPopUp from "../components - projects list/PopUps/FailedCreationPopUp";
import TaskInfo from "../components - project page/TaskInfo";
import EditTaskPopUp from "../components - project page/PopUps/EditTaskPopUp";
import UpdatePriorityPopUp from "../components - project page/PopUps/UpdatePriorityPopUp";
import UpdateStatusPopUp from "../components - project page/PopUps/UpdateStatusPopUp";
import AssignTaskPopUp from "../components - project page/PopUps/AssignTaskPopUp";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const [roles, setRoles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [task, setTask] = useState(null);
  const [usersOnProject, setUsersOnProject] = useState([]);
  const [taskClicked, setTaskClicked] = useState(false);

  const [addNewUserPopUp, setAddNewUserPopUp] = useState(false);
  const [noUsersToAddPopUp, setNoUsersToAdd] = useState(false);
  const [createStatusPopUp, setCreateStatusPopUp] = useState(false);
  const [createTaskPopUp, setCreateTaskPopUp] = useState(false);
  const [createdTaskPopUpOpened, setCreatedTaskPopUpOpened] = useState(false);
  const [failedTaskPopUpOpened, setFailedTaskPopUpOpened] = useState(false);
  const [editTaskPopUp, setEditTaskPopUp] = useState(false);
  const [updatePriorityPopUp, setUpdatePriorityPopUp] = useState(false);
  const [updateStatusPopUp, setUpdateStatusPopUp] = useState(false);
  const [assignUserPopUp, setAssignUserPopUp] = useState(false);

  const { userId, projectId } = useParams();
  console.log(taskClicked);

  const fetchProject = useCallback(async () => {
    request("GET", `/projects/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, []);

  const fetchRoles = async () => {
    request("GET", "/roles", {})
      .then((response) => response.data)
      .then((data) => setRoles(data))
      .catch((error) => console.log(error));
  };

  const fetchAllUsers = async () => {
    request("GET", `/users_to_add/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setAllUsers(data))
      .catch((error) => console.log(error));
  };

  const fetchStatuses = async () => {
    request("GET", `/project_statuses/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setStatuses(data))
      .catch((error) => console.log(error));
  };

  const fetchPriorities = async () => {
    request("GET", `/priorities`, {})
      .then((response) => response.data)
      .then((data) => setPriorities(data))
      .catch((error) => console.log(error));
  };

  const fetchUsersOnProject = async () => {
    request("GET", `/users_on_project/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => setUsersOnProject(data))
      .catch((error) => console.log(error));
  };

  const fetchTasks = async () => {
    request("GET", `/tasks`, {})
      .then((response) => response.data)
      .then((data) => setTask(data[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProject();
    fetchRoles();
    fetchAllUsers();
    fetchStatuses();
    fetchPriorities();
    fetchTasks();
    fetchUsersOnProject();
  }, [fetchProject]);

  const handleAddUserClicked = () => {
    setAddNewUserPopUp(true);
    setNoUsersToAdd(true);
  };

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
    console.log("USLOO");
    setTaskClicked(true);
    console.log(task);
    setTask(task);
  };

  return (
    <div className="h-screen flex">
      <div className="w-full h-full bg-bckgrnd-main flex-col justify-start">
        <div className="h-1/6 border-b-2 border-b-bckgrnd-blue_dark">
          <ProjectHeader userId={userId} />
          <ProjectTitle
            project={project}
            handleAddUser={handleAddUserClicked}
            handleCreateStatus={handleCreateStatusClicked}
            handleCreateTask={handleCreateTaskClicked}
          />
        </div>
        <div
          className={
            taskClicked
              ? "flex justify-between h-5/6 overflow-auto mx-8"
              : "flex h-5/6 overflow-auto mx-8"
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
                closeTaskInfo={() => setTaskClicked(false)}
              />
            )}
          </div>
        </div>
      </div>
      <CreateStatusPopUp
        openPopUp={createStatusPopUp}
        closePopUp={() => setCreateStatusPopUp(false)}
        projectChange={fetchProject}
      />
      <CreateTaskPopUp
        openPopUp={createTaskPopUp}
        closePopUp={() => setCreateTaskPopUp(false)}
        openCreatedTaskPopUp={handleOpenCreatedTaskPopUp}
        openFailedTaskPopUp={handleOpenFailedTaskPopUp}
        priorities={priorities}
        statuses={statuses}
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
      {allUsers !== null && (
        <AddNewUserPopUp
          project={project}
          openPopUp={addNewUserPopUp}
          closePopUp={() => {
            setAddNewUserPopUp(false);
            setNoUsersToAdd(false);
          }}
          handleAddUserClicked={handleAddUserClicked}
          roles={roles}
          allUsers={allUsers}
        />
      )}
      {allUsers === null && (
        <NoUsersToAddPopUp
          openPopUp={noUsersToAddPopUp}
          closePopUp={() => {
            setAddNewUserPopUp(false);
            setNoUsersToAdd(false);
          }}
        />
      )}
      <EditTaskPopUp
        openPopUp={editTaskPopUp}
        closePopUp={() => setEditTaskPopUp(false)}
        task={task}
      />
      <UpdatePriorityPopUp
        openPopUp={updatePriorityPopUp}
        closePopUp={() => setUpdatePriorityPopUp(false)}
        task={task}
        priorities={priorities}
      />
      <UpdateStatusPopUp
        openPopUp={updateStatusPopUp}
        closePopUp={() => setUpdateStatusPopUp(false)}
        task={task}
        statuses={statuses}
      />
      <AssignTaskPopUp
        openPopUp={assignUserPopUp}
        closePopUp={() => setAssignUserPopUp(false)}
        task={task}
        users={usersOnProject}
      />
    </div>
  );
};

export default ProjectPage;
