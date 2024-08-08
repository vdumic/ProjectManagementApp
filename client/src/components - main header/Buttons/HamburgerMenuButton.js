const HamburgerMenuButton = ({isMobileMenuOpen, toggleMobileMenu}) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMobileMenu}
        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default HamburgerMenuButton;
