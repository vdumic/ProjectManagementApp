import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import UserHome from "./pages/UserHome";
import ProjectBoard from "./pages/ProjectBoard";
import HankoAuth from "./pages/Login";
import HankoProfile from "./components/Login/HankoProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<HankoAuth />} />
        <Route path="/profile" element={<HankoProfile />} />
        <Route path="user-home" element={<UserHome />} />
        <Route path="project-board" element={<ProjectBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
