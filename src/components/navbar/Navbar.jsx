import React from "react";
import logo from "../../assets/complogo.png";
import Name from "../../assets/Vector.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div id="home" className="navbar">
      <div className="img-wrapper">
        <img src={logo} alt="logo" className="logo" />
        <img src={Name} alt="company-name" className="comp-name" />
      </div>
      <div className="nav-wrapper">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#offerings">Our Offerings</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        </ul>
      </div>
      <button>Register Now</button>
    </div>
  );
};

export default Navbar;
