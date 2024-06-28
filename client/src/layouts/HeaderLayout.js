import { Helmet } from "react-helmet";
import ProjectsHeader from "../components/ProjectsHeader";

const HeaderLayout = ({ title, children, ...rest }) => {
  return (
    <div className="h-screen overflow-hidden bg-bckgrnd-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <ProjectsHeader />
      <main {...rest}>{children}</main>
    </div>
  );
};

export default HeaderLayout;
