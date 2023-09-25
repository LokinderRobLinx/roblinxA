import React, { useState } from 'react'
import "./nav.css"
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/Roblinx PNG.png";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
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

      {/* <div className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>Services</span>
        {isHovered && (
          <div className="service-list">
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>

          </div>
        )}
      </div> */}

      <div
        className={`collapse navbar-collapse ${show ? "show" : ""}`}
      >
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          {/* <li>
              <NavLink to="/services">Services</NavLink>
            </li> */}

           <li>
          <NavLink to="/services" className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Services
            {isHovered && (
              <div className="service-list">
                {/* <ul>
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul> */}

                <ul
                    // className="dropdown-menu"
                    // aria-labelledby="navbarDropdown"
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

              </div>
            )}
          </NavLink>
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


    </nav>
  )
}

export default Nav