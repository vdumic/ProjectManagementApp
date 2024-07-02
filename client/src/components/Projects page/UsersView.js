const users = [
  { name: "Amelia Price", role: "Admin" },
  { name: "Jacob Evans", role: "Guest" },
  { name: "Mia Jenkins", role: "Guest" },
  { name: "Harper Reed", role: "Admin" },
];

const UsersView = () => {
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
                  {user.name}
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
