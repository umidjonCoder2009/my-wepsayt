import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/Features";
import Home from "./pages/Home";
import Navbar from "./companents/navbar";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
