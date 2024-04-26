import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import HeroButton from "./Buttons/HeroButton";
import NavLink from "./Buttons/NavLink";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    console.log(isScrolled);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`sticky z-50 top-0 flex items-center ${
        isScrolled && "bg-bckgrnd-light bg-opacity-90"
      }`}
    >
      <main className="max-w-full flex-grow flex flex-col my-5 mx-44">
        <div className="flex items-center justify-between">
          <img src={logo} height="100" width="150" />
          <div className="flex items-center justify-between mr-80">
            <NavLink title="Work management" />
            <NavLink title="About us" />
            <NavLink title="Support" />
          </div>
          <div className="flex items-center justify-between">
            <button className="py-2 px-2">
              <p className="text-text-dark text-lg font-medium mr-6">Sign in</p>
            </button>
            <HeroButton title="Get started" />
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
