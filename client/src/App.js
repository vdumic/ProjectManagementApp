import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import ProjectBoard from "./pages/ProjectBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="user-home" element={<UserHome />} />
        <Route path="project-board" element={<ProjectBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
