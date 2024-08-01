import React from "react";

const AppContext = React.createContext({
  userState: {
    userId: "",
  },
});

export default AppContext;
