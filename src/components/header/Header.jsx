import React from "react";
import "./Header.scss";
import House from "../../assets/Rectangle 5533.png";
import Text_1 from "../../assets/header-text1.png";
import House_2 from "../../assets/house-2.png";
import Arrow from "../../assets/arrow.png";
import Line from "../../assets/line.png";

const Header = () => {
  return (
    <div className="header">
      <div className="first">
        <img src={Text_1} alt="header-text" className="house-text-1" />
        <img src={House} alt="header-img" className="house-img-1" />
      </div>
      <div className="second">
        <img src={House_2} alt="header-img" className="house-img-2" />
        <div className="header-desc">
          <p className="header-desc-1">Who We Are</p>
          <p className="header-desc-2">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </p>
          <div className="header-button">
            <button>Contact Now</button>
            <div className="direction">
              <img src={Line} alt="line" className="line" />
              <img src={Arrow} alt="arrow" className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
