import { Link } from "react-router-dom";

const NavLink = ({ title, path }) => {
  return (
    <Link className="text-text-dark text-lg mr-6 py-2 px-1" to={path}>
      {title}
      {/* <p className="text-text-dark text-lg mr-6 py-2 px-1">{title}</p> */}
    </Link>
  );
};

export default NavLink;
