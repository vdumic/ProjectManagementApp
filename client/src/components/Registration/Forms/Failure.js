import { BsXCircle } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Failure = ({ email }) => {
  return (
    <div className="flex flex-col h-screen items-center pt-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Registration</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <BsXCircle size="5em" />
        <div className="text-3xl font-medium pt-10">
          Registration to Sprynt failed!
        </div>
      </div>
      <div className="text-xl font-light pt-5 sm:text-center">
        User with email already exists: {email}
      </div>
      <Link
        to="/login"
        className="flex justify-center text-lg text-white font-medium mt-10 py-2.5 px-5 bg-button-blue rounded-xl shadow-xl "
        type="submit"
      >
        Sign in
      </Link>
    </div>
  );
};

export default Failure;
