import { useNavigate } from "react-router-dom";
import { setAuthHeader } from "../axios/axios_helper";

const DropDownMenu = () => {
    const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthHeader(null);
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="absolute right-0 z-10 w-44 mt-4 origin-top-right bg-bckgrnd-blue_light border border-gray-100 rounded-md shadow-lg">
        <div className="p-2 text-white bg-bckgrnd-blue_dark rounded-md font-semibold">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
