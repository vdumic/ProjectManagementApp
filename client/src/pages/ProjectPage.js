import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components - project page/ProjectHeader";
import ProjectTitle from "../components - project page/ProjectTitle";
import StatusTasksBox from "../components/Project/StatusTasksBox";
import { request } from "../axios/axios_helper";
import AddNewUserPopUp from "../components - projects list/PopUps/AddNewUserPopUp";
import NoUsersToAddPopUp from "../components - projects list/PopUps/NoUsersToAddPopUp";
import CreateStatusPopUp from "../components - project page/PopUps/CreateStatusPopUp";
import CreateTaskPopUp from "../components - project page/PopUps/CreateTaskPopUp";
import CreatedPopUp from "../components - projects list/PopUps/CreatedPopUp";
import FailedCreationPopUp from "../components - projects list/PopUps/FailedCreationPopUp";

const ProjectPage = () => {
  const { userId, projectId } = useParams();
  const [project, setProject] = useState({});
  const [roles, setRoles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [addNewUserPopUp, setAddNewUserPopUp] = useState(false);
  const [noUsersToAddPopUp, setNoUsersToAdd] = useState(false);
  const [createStatusPopUp, setCreateStatusPopUp] = useState(false);
  const [createTaskPopUp, setCreateTaskPopUp] = useState(false);
  const [createdTaskPopUpOpened, setCreatedTaskPopUpOpened] = useState(false);
  const [failedTaskPopUpOpened, setFailedTaskPopUpOpened] = useState(false);

  const fetchProject = useCallback(async () => {
    request("GET", `/projects/${projectId}`, {})
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.data;
          setProject(data);
          console.log(data);
        } else {
          console.log("Failed to fetch projects", response.statusText);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchRoles = async () => {
    request("GET", "/roles", {})
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setRoles(data);
      });
  };

  const fetchAllUsers = async () => {
    request("GET", `/users_to_add/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setAllUsers(data);
      })
      .catch((error) => {
        console.log(error);
        setAllUsers(null);
      });
  };

  const fetchStatuses = async () => {
    request("GET", `/project_statuses/${projectId}`, {})
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setStatuses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchPriorities = async () => {
    request("GET", `/priorities`, {})
      .then((response) => response.data)
      .then((data) => {
        setPriorities(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProject();
    fetchRoles();
    fetchAllUsers();
    fetchStatuses();
    fetchPriorities();
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

  return (
    <div className="h-screen flex">
      <div className="w-full h-full bg-bckgrnd-main flex-col justify-start">
        <div className="h-1/6">
          <ProjectHeader userId={userId} />
          <ProjectTitle
            project={project}
            handleAddUser={handleAddUserClicked}
            handleCreateStatus={handleCreateStatusClicked}
            handleCreateTask={handleCreateTaskClicked}
          />
        </div>
        <div className="h-5/6 overflow-y-auto mx-8">
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
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
    </div>
  );
};

export default ProjectPage;
