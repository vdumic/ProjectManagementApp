import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuthToken, request } from "../axios/axios_helper";

import logo from "../assets/logo.png";

import DesktopNavigation from "./DesktopNavigation";
import HamburgerMenuButton from "./Buttons/HamburgerMenuButton";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [token, setToken] = useState(getAuthToken());
  const [validToken, setValidToken] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const checkToken = useCallback(() => {
    request("GET", `/validation/${token}`, {})
      .then((response) => response.data)
      .then((data) => setValidToken(data))
      .catch((error) => console.log(error));
  }, [token]);

  useEffect(() => {
    setToken(getAuthToken());
    checkToken();

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [token, checkToken]);

  return (
    <header
      className={`sticky z-50 top-0 bg-bckgrnd-light ${
        isScrolled && "bg-opacity-100 drop-shadow-lg"
      }`}
    >
      <main className="max-w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-48">
        <div className="flex items-center justify-between py-4">
          <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
            <img src={logo} alt="Sprynt logo" width="110" />
          </Link>

          <DesktopNavigation
            location={location}
            token={token}
            validToken={validToken}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />

          <HamburgerMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>

        {isMobileMenuOpen && (
          <MobileNavigation
            location={location}
            token={token}
            validToken={validToken}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
          />
        )}
      </main>
    </header>
  );
};

export default Header;
