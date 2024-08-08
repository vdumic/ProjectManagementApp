import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BsCheckCircle } from "react-icons/bs";

const Success = ({ email, userId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/projects-list/${userId}`);
    }, 4000);
  }, [navigate, userId]);

  return (
    <div className="flex flex-col h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Registration</title>
      </Helmet>
      <div className="flex flex-col items-center text-center">
        <BsCheckCircle size="4em" className="text-green-500" />
        <div className="text-2xl sm:text-3xl font-semibold mt-4">
          Successful registration to Sprynt!
        </div>
        <div className="text-lg sm:text-xl font-light mt-2">
          Registered email: <span className="font-medium">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default Success;
