import { Link } from "react-router-dom";

const HeroButton = ({ title, path }) => {
  return (
    <Link to={path} className="bg-button-blue rounded-xl drop-shadow-lg">
      <p className="text-lg sm:text-xl md:text-2xl py-2 sm:py-3 px-6 sm:px-8 md:px-10 text-white font-medium">
        {title}
      </p>
    </Link>
  );
};

export default HeroButton;