import { useState, useEffect, useCallback } from "react";

const UsersView = ({ project }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/users_on_project/${project.projectId}`
      );

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <div className="flex justify-start mx-auto p-4">
        <button className="bg-bckgrnd-main rounded drop-shadow-lg border">
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
                <td className="py-2.5 px-4 text-lg text-text-dark">
                  {user.role}
                </td>
                <td className="py-2.5 px-4">
                  <button className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-2">
                    Change role
                  </button>
                  <button className="bg-bckgrnd-high text-white px-3 py-1 ml-3 rounded drop-shadow-md">
                    Remove user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersView;
