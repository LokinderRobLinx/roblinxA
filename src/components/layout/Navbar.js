import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Roblinx PNG.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav>
        <div className="logoContainer">
          <Link className="logo " to="/">
            <img src={logo} alt="logo" className="logoImg" />
            {/* <h2>
              <span>R</span>ob
              <span>L</span>inx
            </h2> */}
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${show ? "show" : ""}`}
        >
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            {/* <li>
              <NavLink to="/about">About Us</NavLink>
            </li> */}
            <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/team" className="dropdown-item">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/work" className="dropdown-item">
                        Our Work
                      </Link>
                    </li>
                  </ul>
                </li>
            {/* <li>
              <NavLink to="/services">Services</NavLink>
            </li> */}
            <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                     <li>
                      <Link to="/webdev" className="dropdown-item">
                        Web Developmnet
                      </Link>
                    </li>
                    <li>
                      <Link to="/android" className="dropdown-item">
                        Android Apps
                      </Link>
                    </li>
                    <li>
                      <Link to="/ios" className="dropdown-item">
                        Ios Apps
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/products" className="dropdown-item">
                        Products
                      </Link>
                    </li>
                  </ul>
                </li>

            <li>
              <NavLink to="/liferob">Life@RobLinx</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="social-links">
          <Link to="https://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="https://www.instagram.com"
           target="_blank"
           rel="noopener noreferrer"
           style={{ cursor: "pointer" }}
           title="Visit The Linkedin"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            to="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
            title="Visit The Linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div> */}

        <div id="mobile" onClick={() => setClicked(!clicked)}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
