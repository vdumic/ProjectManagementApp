import React from "react";

const AppContext = React.createContext({
  handleLogin: () => {},
  handleLogout: () => {},
  userState: {
    isLoggedIn: false,
  },
});

export default AppContext;
