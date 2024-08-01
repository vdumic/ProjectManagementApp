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
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen items-center pt-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Registration</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <BsCheckCircle size="5em" />
        <div className="text-3xl font-medium pt-10">
          Successful registration to Sprynt!
        </div>
      </div>
      <div className="text-xl font-light pt-5 sm:text-center">
        Registered email: {email}
      </div>
    </div>
  );
};

export default Success;
