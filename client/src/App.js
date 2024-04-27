import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import UserHome from "./components/User home/UserHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-home" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
