import { useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

import logo from "../assets/logo.png";

import UserLogin from "../components - login/UserLogin";

const Login = () => {
  const [error, setError] = useState("");

  const handleError = (message) => {
    setError(message);
  };

  return (
    <div className="flex flex-col justify-start items-center bg-bckgrnd-main h-screen pt-10 sm:pt-20 px-4">
      <div className="flex justify-center place-items-center pb-6">
        <Link to="/">
          <img className="w-32 sm:w-36 mx-4" src={logo} alt="Sprynt logo" />
        </Link>
      </div>
      <UserLogin handleError={handleError} />
      <div className="flex justify-center mt-6 text-red-800 font-semibold text-center">
        {error.message}
      </div>
      <div className="flex flex-col w-full max-w-xs sm:max-w-sm">
        <Link to="/passkey">
          <button className="flex justify-center items-center gap-2 text-white font-medium mt-4 px-4 py-2 bg-bckgrnd-blue_dark rounded-xl shadow-xl w-full">
            Sign in with passkey
            <SlArrowRight className="h-5 w-5" />
          </button>
        </Link>
        <Link to="/register">
          <button className="flex justify-center items-center gap-2 bg-bckgrnd-dark text-[#252526] text-sm font-medium mt-4 py-2 px-4 border-2 border-bckgrnd-dark rounded-xl shadow-xl w-full">
            Don't have an account? Signup
            <SlArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;