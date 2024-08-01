import { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

import logo from "../assets/logo.png";
import UserLogin from "../components - login/UserLogin";

const Login = () => {
  const [error, setError] = useState("");

  const handleError = (message) => {
    setError(message);
  }

  return (
    <div className="flex flex-col justify-start items-center bg-bckgrnd-main h-screen pt-20">
      <div className="flex justify-center place-items-center pb-6 sm:mx-8">
        <Link to="/">
          <img className="w-36 mx-4" src={logo} alt="Sprynt logo" />
        </Link>
      </div>
      <UserLogin handleError={handleError} />
      <div className="flex justify-center mt-6 text-red-800 font-semibold">{error.message}</div>
      <Link to="/register">
        <button className="flex justify-center bg-bckgrnd-dark text-[#252526] text-sm font-medium mt-8 py-2 pl-5 pr-3.5 border-2 border-bckgrnd-dark rounded-xl shadow-xl">
          {`Don't have an accout? Signup`}
          <SlArrowRight className="h-4 w-4 sm:inline cursor-pointer pt-1" />
        </button>
      </Link>
    </div>
  );
};

export default Login;
