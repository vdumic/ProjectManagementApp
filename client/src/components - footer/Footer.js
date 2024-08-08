import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-bckgrnd-main">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 lg:py-10 sm:py-4 md:py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-40 mb-6 lg:mb-0 flex justify-center lg:justify-start">
            <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
              <img src={logo} alt="Sprynt logo" className="h-12 w-auto" />
            </Link>
          </div>

          <div className="w-full lg:w-2/12 mb-6 lg:mb-0">
            <ul className="flex flex-col justify-center items-center">
              <li className="mb-2">
                <Link
                  to="/work-management"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="text-text-dark text-lg py-2 px-1 text-center lg:text-left"
                >
                  Work management
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about-us"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="text-text-dark text-lg py-2 px-1 text-center lg:text-left"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/support"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="text-text-dark text-lg py-2 px-1 text-center lg:text-left"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/12 flex flex-col items-center lg:items-start">
            <h1 className="text-text-dark font-semibold text-xl mb-4 text-center lg:text-left">
              Follow us
            </h1>
            <div className="flex justify-center lg:justify-start">
              <SocialIcon
                network="facebook"
                url="https://facebook.com"
                className="mx-1"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                network="x"
                url="https://twitter.com"
                className="mx-1"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                network="instagram"
                url="https://instagram.com"
                className="mx-1"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                network="linkedin"
                url="https://linkedin.com"
                className="mx-1"
                style={{ height: 40, width: 40 }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
