import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkManagement from "./pages/WorkManagement";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasskeyLogin from "./components - login/PasskeyLogin";
import UserProfile from "./components - profile/UserProfile";

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
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/projects-list/:userId" element={<ProjectsPage />} />
          <Route path="/projects/:userId/:projectId" element={<ProjectPage />} />
          <Route path="/passkey" element={<PasskeyLogin />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
