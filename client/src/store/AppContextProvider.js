import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  userState: {
    userId: "",
  },
};

const appReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      userState: {
        userId: true,
      },
    };
  }
};

const AppContextProvider = (props) => {
  const [appState, dispatchAction] = useReducer(appReducer, defaultAppState);

  const userIdHandler = () => {
    dispatchAction({ type: "LOGIN" });
  };

  const appContext = {
    userData: appState.userState,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
