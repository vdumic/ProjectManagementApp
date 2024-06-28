import { Link } from "react-router-dom";

const NavLink = ({ title, path, location }) => {
  return (
    <Link
      className={`text-text-dark text-lg mr-6 py-2 px-1 ${
        location.includes(path) ? `font-bold` : ``
      }`}
      to={path}
    >
      {title}
    </Link>
  );
};

export default NavLink;
