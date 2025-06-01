import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="logo">
            <span className="logoMain">TRAVEL</span>
            <span className="logoSub">bookings</span>
          </div>
        </Link>
        <div className="navItems">
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="navButton register">Register</button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="navButton login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;