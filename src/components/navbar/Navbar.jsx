import React, { Fragment, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar-container container">
        
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimesCircle /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : " non")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : " non")
                  }
                  onClick={closeMobileMenu}
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : " non")
                  }
                  onClick={closeMobileMenu}
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : " non")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact us
                </NavLink>
              </li>
              <span style={{ paddingRight: "15px" }}></span>
            </ul>
      
        </div>
       <div style={{ textAlign: "center", fontWeight:"bold", fontSize:"25px" }}>Lando</div>

        <div className="loginndsignup">
        <div className="login-btn">
          <button className="nav-btn">Login</button>
        </div>
        <div className="signup-btn">
          <button className="nav-btn">Signup</button>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
