import { Link } from "react-router-dom";

const HeaderButton = ({ title, path }) => {
  return (
    <Link to={path} className="bg-button-blue rounded-xl">
      <p className="text-lg py-2 px-5 text-white font-medium">{title}</p>
    </Link>
  );
};

export default HeaderButton;
