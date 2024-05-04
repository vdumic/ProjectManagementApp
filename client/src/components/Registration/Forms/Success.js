import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/user-home");
    }, 4000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center">
      <BsCheckCircle size="5em" />
      <div className="text-3xl font-medium pt-10">
        Successful registration to Sprynt!
      </div>
    </div>
  );
};

export default Success;
