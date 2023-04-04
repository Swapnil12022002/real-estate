import React from "react";
import "./Footer.scss";
import CompName from "../../assets/compimg.png";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="f1">
          <div className="img-wrapper">
            <img src={CompName} alt="comp-name" />
          </div>
          <div className="company">
            <p className="f-header">Company</p>
            <p className="comp-links">
              <a href="#home" className="thisHere">
                Home
              </a>
            </p>
            <p className="comp-links">
              <a href="#offerings" className="thisHere">
                Our Offerings
              </a>
            </p>
            <p className="comp-links">
              <a href="#team" className="thisHere">
                Our Team
              </a>
            </p>
            <p className="comp-links">
              <a href="#contact" className="thisHere">
                Contact Us
              </a>
            </p>
          </div>
          <div className="useful-links">
            <p className="f-header">Useful Links</p>
            <p className="comp-links">
              <a href="#blogs" className="thisHere">
                Blogs
              </a>
            </p>
            <p className="comp-links">
              <a href="#contact" className="thisHere">
                FAQ's
              </a>
            </p>
          </div>
          <div className="support">
            <div className="sup">
              <img src={Email} alt="email" />
              <div className="support-wrapper">
                <p className="f-header">Email:</p>
                <p className="comp-links-1">support@inreglobal.com</p>
              </div>
            </div>
            <div className="sup">
              <img src={Phone} alt="phone" />
              <div className="support-wrapper">
                <p className="f-header">Phone:</p>
                <p className="comp-links-1">+91 | 7019305889</p>
              </div>
            </div>
          </div>
        </div>
        <div className="f2">
          <p className="comp-links-2">
            Copyright 2023. Designed by INRE Global
          </p>
          <div className="socials">
            <div className="handle">
              <AiOutlineLinkedin size={20} />
              <p>Linkedin</p>
            </div>
            <div className="handle">
              <FaFacebookF size={20} />
              <p>Facebook</p>
            </div>
            <div className="handle">
              <FaTwitter size={20} />
              <p>Twitter</p>
            </div>
            <div className="handle">
              <FaInstagram size={20} />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
