import logo from "../assets/logo.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-bckgrnd-light">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap py-10">
          <div className="flex justify-items-center items-center w-full sm:w-2/3 lg:w-3/12">
            <div className="w-full flex items-center justify-center">
              <img src={logo} alt="Sprynt logo" height="100" width="150" />
            </div>
          </div>
          <div className="w-full align-middle sm:w-1/2 lg:w-2/12">
            <div className="my-auto w-full">
              <ul>
                <li className="flex items-center justify-center">
                  <button>
                    <p className="text-text-dark text-lg py-2 px-1">
                      Work management
                    </p>
                  </button>
                </li>
                <li className="flex items-center justify-center">
                  <button>
                    <p className="text-text-dark text-lg py-2 px-1">About us</p>
                  </button>
                </li>
                <li className="flex items-center justify-center">
                  <button>
                    <p className="text-text-dark text-lg py-2 px-1">Support</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mx-10 sm:w-1/2 lg:w-2/12">
            <div className="flex justify-items-center items-center w-full px-4">
              <div className="w-full mb-8">
                <h1 className="text-text-dark font-semibold text-center text-xl">
                  Follow us
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
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
