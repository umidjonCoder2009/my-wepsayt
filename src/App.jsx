import "./App.css";

import { Routes, Route } from "react-router-dom";
import About from "./pages/Features";
import Home from "./pages/Home";
import Menu from "./pages/Pricing";
import Navbar from "./companents/navbar";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
