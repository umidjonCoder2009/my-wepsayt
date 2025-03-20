import "./App.css";

import { Routes, Route } from "react-router-dom";
import About from "./pages/Features";
import Home from "./pages/Home";
import Navbar from "./companents/navbar";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
