import { Link, useParams } from "react-router-dom";

import logo from "../../assets/logo.png";
import userIcon from "../../assets/user_icon.png";
import { useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userId } = useParams();

  return (
    <main className="md:hidden max-w-full mx-auto px-8 shadow-md">
      <div className="flex items-center justify-between py-4">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <img src={logo} alt="Sprynt logo" width="110" />
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img
            src={userIcon}
            alt="User icon"
            height="40"
            width="40"
            className="bg-bckgrnd-main rounded-full"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col">
          <Link to={`/projects-list/${userId}`}>
            <p className="text-text-dark text-lg font-medium px-1 py-2">
              Projects
            </p>
          </Link>
          <Link to={`/profile/${userId}`}>
            <p className="text-text-dark text-lg font-medium px-1 py-2">
              Profile
            </p>
          </Link>
          <div className="py-2 px-3 text-white bg-bckgrnd-blue_dark rounded-md font-semibold w-fit mb-2">
            <button>Logout</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MobileHeader;
