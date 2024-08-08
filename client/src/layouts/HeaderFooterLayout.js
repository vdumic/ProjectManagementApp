import { Helmet } from "react-helmet";

import Header from "../components - main header/Header";
import Footer from "../components - footer/Footer";
import Spacer from "../components - home/Spacer";

const HeaderFooterLayout = ({ title, children, ...rest }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bckgrnd-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="flex-grow" {...rest}>
        {children}
      </main>
      <Spacer />
      <Footer />
    </div>
  );
};

export default HeaderFooterLayout;