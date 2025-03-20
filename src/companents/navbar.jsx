import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/Screenshot_3 [Recovered] 1.png";
function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <Link to={"/"}>
        <a>Home</a>
      </Link>
      <Link to={"/about"}>
        <a>Project</a>
      </Link>
    
      <Link to={"/services"}>
        <a>Services</a>
      </Link>
      <Link to={"/about"}>
        <a>About</a>
      </Link>
      <Link to={"/blog"}>
        <a>Blog</a>
      </Link>
      <Link to={"/shop"}>
        <a>SHop</a>
      </Link>
      <Link to={"/contact"}>
        <a>CONTACT</a>
      </Link>
      <button>Get Started</button>
    </div>
  );
}
export default Navbar;
