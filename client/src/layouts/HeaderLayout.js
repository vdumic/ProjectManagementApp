import { Helmet } from "react-helmet";
import Header from "../components/Header";

const HeaderLayout = ({ title, children, ...rest }) => {
  return (
    <div className="h-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main {...rest}>{children}</main>
    </div>
  );
};

export default HeaderLayout;
