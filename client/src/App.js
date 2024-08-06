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

import "./index.css";
import PasskeyLogin from "./components - passkeys/PasskeyLogin";


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
          <Route path="/projects/:userId/:projectId" element={<ProjectPage />} />
          <Route path="/passkey" element={<PasskeyLogin />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
