import { useState, useEffect, useCallback } from "react";
import { request } from "../axios/axios_helper";
import AddNewUserPopUp from "./PopUps/AddNewUserPopUp";
import NoUsersToAddPopUp from "./PopUps/NoUsersToAddPopUp";
import RemoveUserPopUp from "./PopUps/RemoveUserPopUp";
import ChangeRolePopUp from "./PopUps/ChangeRolePopUp";

const UsersView = ({ project, projectChange }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [addUserPopUp, setAddUserPopUp] = useState(false);
  const [noUsersPopUp, setNoUsersPopup] = useState(false);
  const [removeUserPopUp, setRemoveUserPopUp] = useState(false);
  const [user, setUser] = useState({});
  const [changeRolePopUp, setChangeRolePopUp] = useState(false);

  const fetchUsers = useCallback(async () => {
    request("GET", `/users_on_project/${project.projectId}`, {})
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.data;
          setUsers(data);
        } else {
          console.log("Failed to fetch users: " + response.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchRoles = async () => {
    request("GET", "/roles", {}).then(async (response) => {
      const data = await response.data;
      setRoles(data);
    });
  };

  const fetchAllUsers = async () => {
    request("GET", `/users_to_add/${project.projectId}`, {})
      .then(async (response) => {
        const data = await response.data;
        setAllUsers(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setAllUsers(null);
      });
  };

  console.log(allUsers);

  useEffect(() => {
    fetchUsers();
    fetchRoles();
    fetchAllUsers();
  }, [fetchUsers]);

  const handleAddUserClicked = () => {
    setAddUserPopUp(true);
    setNoUsersPopup(true);
  };

  const handleRemoveUserClicked = (user) => {
    setUser(user);
    setRemoveUserPopUp(true);
  };

  const handleChangeRoleClicked = (user) => {
    setUser(user);
    setChangeRolePopUp(true);
  };

  return (
    <div>
      <div className="flex justify-start mx-auto p-4">
        <button
          className="bg-bckgrnd-main rounded drop-shadow-lg border"
          onClick={handleAddUserClicked}
        >
          <p className="text-xl py-3 px-7 text-text-dark font-bold">
            Add new user
          </p>
        </button>
      </div>
      <div className="flex justify-start mx-auto p-4">
        <table className="min-w-full bg-white border border-bckgrnd-blue_dark">
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border border-bckgrnd-blue_dark">
                <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
                  {`${user.firstname} ${user.lastname}`}
                </td>
                <td className="py-2.5 px-4 text-md text-text-dark">
                  {user.role.toUpperCase()}
                </td>
                <td className="py-2.5 px-4">
                  <button
                    className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-2"
                    onClick={() => handleChangeRoleClicked(user)}
                  >
                    Change role
                  </button>
                  <button
                    className="bg-bckgrnd-high text-white px-3 py-1 ml-3 rounded drop-shadow-md"
                    onClick={() => handleRemoveUserClicked(user)}
                  >
                    Remove user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!allUsers && (
        <NoUsersToAddPopUp
          openPopUp={noUsersPopUp}
          closePopUp={() => {
            setAddUserPopUp(false);
            setNoUsersPopup(false);
          }}
        />
      )}
      {allUsers && (
        <AddNewUserPopUp
          project={project}
          openPopUp={addUserPopUp}
          closePopUp={() => {
            setAddUserPopUp(false);
            setNoUsersPopup(false);
          }}
          projectChange={projectChange}
          roles={roles}
          allUsers={allUsers}
        />
      )}
      <ChangeRolePopUp
        project={project}
        user={user}
        openPopUp={changeRolePopUp}
        closePopUp={() => setChangeRolePopUp(false)}
        projectChange={projectChange}
        roles={roles}
      />
      <RemoveUserPopUp
        project={project}
        user={user}
        openPopUp={removeUserPopUp}
        closePopUp={() => setRemoveUserPopUp(false)}
        projectChange={projectChange}
      />
    </div>
  );
};

export default UsersView;
