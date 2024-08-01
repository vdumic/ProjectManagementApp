import { Link } from "react-router-dom";

const HeaderLink = ({ title, path, location }) => {
  return (
    <Link
      className={`text-text-dark text-lg mr-6 py-2 px-1 ${
        location.includes(path) ? `font-bold` : ``
      }`}
      to={path}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
