import { Helmet } from "react-helmet";
import Header from "../components - main header/Header";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";

const HeaderFooterLayout = ({ title, children, ...rest }) => {
  return (
    <div className="h-full bg-bckgrnd-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main {...rest}>{children}</main>
      <Spacer />
      <Footer />
    </div>
  );
};

export default HeaderFooterLayout;
