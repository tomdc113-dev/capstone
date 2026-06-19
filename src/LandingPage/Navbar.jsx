import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img
            src={logo}
            alt="ASG Strength"
            className="logo"
          />
          <span className="brand">
            ASG_Strength
          </span>
        </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>
            About
          </li>

          <li onClick={() => scrollToSection("trainers")}>
            Trainers
          </li>

          <li onClick={() => scrollToSection("plans")}>
            Plans
          </li>

          <li onClick={() => scrollToSection("location")}>
            Location
          </li>
        </ul>

        <div className="nav-right">

          <button
            className="login-btnnav"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>

          <Link to="/register">
            <button className="register-btn">
              Register
            </button>
          </Link>

        </div>
      </nav>

      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />
    </>
  );
}

export default Navbar;