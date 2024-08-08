import { BsXCircle } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Failure = ({ email, handleBeginRegistration }) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Registration</title>
      </Helmet>
      <div className="flex flex-col items-center text-center">
        <BsXCircle size="4em" className="text-red-600" />
        <div className="text-2xl sm:text-3xl font-semibold mt-4">
          Registration to Sprynt failed!
        </div>
        <div className="text-lg sm:text-xl font-light mt-2">
          User with email already exists:{" "}
          <span className="font-medium">{email}</span>
        </div>
        <button
          onClick={handleBeginRegistration}
          className="mt-8 py-2 px-6 text-lg text-white font-semibold bg-button-blue rounded-lg shadow-md hover:bg-button-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-blue-dark"
        >
          Try with another email
        </button>
      </div>
    </div>
  );
};

export default Failure;
