import React from "react";
import "./Offerings.scss";
import Ellipse from "../../assets/Ellipse.png";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Offerings = () => {
  return (
    <div id="offerings" className="offerings">
      <h2>Our Offerings</h2>
      <hr />
      <p className="lil-desc">
        This whole purchase journey can be divided into three stages. For more
        details, <a href="#click">Click Here</a>
      </p>
      <div className="offerings-container">
        <div className="item">
          <div className="sphere">
            <p>1</p>
            <img src={Ellipse} alt="ellipse" />
          </div>
          <p>Pre-Booking</p>
        </div>
        <div className="item2">
          <div className="sphere">
            <p>2</p>
            <img src={Ellipse} alt="ellipse" />
          </div>
          <p>Post-Booking & Pre-Registration</p>
        </div>
        <div className="item">
          <div className="sphere">
            <p>3</p>
            <img src={Ellipse} alt="ellipse" />
          </div>
          <p>Post-Registration </p>
        </div>
      </div>
      <div className="offerings-container-2">
        <div className="o-item">
          <img src={Image1} alt="first" />
          <p className="o-header">Background verification</p>
          <p className="o-info">
            Assuring your capital is in safe hands, we provide detailed
            verification reports of the project and developer. These are
            customized and detailed...
          </p>
          <div className="button-wrapper">
            <div className="header-button">
              <button>
                <a href="#contact" className="another">
                  Contact us
                </a>
              </button>
              <AiOutlineArrowRight size={20} className="arrow" />
            </div>
            <p>INR 3000/Project</p>
          </div>
        </div>
        <div className="o-item">
          <img src={Image2} alt="first" />
          <p className="o-header">Virtual site visit</p>
          <p className="o-info">
            It becomes imperative to observe your apartment or plot very closely
            before paying the booking amount. We are here to assist with an
            AI-enabled UAV...
          </p>
          <div className="button-wrapper">
            <div className="header-button">
              <button>
                <a href="#contact" className="another">
                  Contact us
                </a>
              </button>
              <AiOutlineArrowRight size={20} className="arrow" />
            </div>
          </div>
        </div>
        <div className="o-item">
          <img src={Image3} alt="first" />
          <p className="o-header">Title diligence</p>
          <p className="o-info">
            Due diligence is necessary to prevent real estate malpractices which
            have contributed to more than 20% of the civil cases in India. We
            have a panel of...
          </p>
          <div className="button-wrapper">
            <div className="header-button">
              <button>
                <a href="#contact" className="another">
                  Contact us
                </a>
              </button>
              <AiOutlineArrowRight size={20} className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
