import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  userState: {
    isLoggedIn: false,
  },
};

const appReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      userState: {
        isLoggedIn: true,
      },
    };
  }

  if (action.type === "LOGOUT") {
    return {
      userState: {
        isLoggedIn: false,
      },
    };
  }
};

const AppContextProvider = (props) => {
  const [appState, dispatchAction] = useReducer(appReducer, defaultAppState);

  const loginHandler = () => {
    dispatchAction({ type: "LOGIN" });
  };

  const logoutHandler = async () => {
    dispatchAction({ type: "LOGOUT" });
  };

  const appContext = {
    handleLogin: loginHandler,
    handleLogout: logoutHandler,
    userData: appState.userState,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
