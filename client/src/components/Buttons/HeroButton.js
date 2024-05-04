import { Link } from "react-router-dom";

const HeroButton = ({ title, path }) => {
  return (
    <Link to={path} className="bg-button-blue rounded-xl drop-shadow-lg">
      <p className="text-2xl py-3 px-10 text-white font-medium">{title}</p>
    </Link>
  );
};

export default HeroButton;
