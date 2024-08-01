import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkManagement from "./pages/WorkManagement";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import Login from "./pages/Login";
import HankoProfile from "./components/Login/HankoProfile";
import Register from "./pages/Register";
import AuthComponent from "./components/AuthContent";

import "./index.css";


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-management" element={<WorkManagement />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<HankoProfile />} />
          <Route path="/projects-list/:userId" element={<ProjectsPage />} />
          <Route path="/projects/:userid/:projectId" element={<ProjectPage />} />
          <Route path="/dummy" element={<AuthComponent />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
