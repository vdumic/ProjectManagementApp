import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { request, setAuthHeader } from "../axios/axios_helper";

const MainDropDownMenu = () => {
    const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthHeader(null);
    navigate("/");
    window.location.reload();
  };

  console.log(window.localStorage.getItem("auth_token"));

  const fetchUser = () => {
    request("GET", `/signed_user/${window.localStorage.getItem("auth_token")}`)
      .then((response) => response.data)
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="relative">
      <div className="absolute right-0 z-10 w-44 mt-4 origin-top-right bg-transparent border rounded-md shadow-lg">
        <div className="p-2 text-bckgrnd-blue_dark bg-bckgrnd-light rounded-md font-semibold mb-2">
          <Link to={`/projects-list/${user.id}`}>Projects</Link>
        </div>
        <div className="p-2 text-white bg-bckgrnd-blue_dark rounded-md font-semibold">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default MainDropDownMenu;
