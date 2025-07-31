import "./App.css";

import { Routes, Route } from "react-router";
import Home from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Club from "./pages/Club/Club";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Club" element={<Club />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
