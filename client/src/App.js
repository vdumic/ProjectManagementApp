import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkManagement from "./pages/WorkManagement";
import UserHome from "./pages/UserHome";
import ProjectBoard from "./pages/ProjectBoard";
import Login from "./pages/Login";
import HankoProfile from "./components/Login/HankoProfile";
import AppContextProvider from "./store/AppContextProvider";
import Register from "./pages/Register";
import "./index.css";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-management" element={<WorkManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<HankoProfile />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/project-board" element={<ProjectBoard />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
