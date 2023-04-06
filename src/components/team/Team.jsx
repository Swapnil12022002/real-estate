import React, { useState } from "react";
import "./Team.scss";
import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";

const Team = () => {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

  const handleView1 = () => {
    setView1(!view1);
  };
  const handleView2 = () => {
    setView2(!view2);
  };
  const handleView3 = () => {
    setView3(!view3);
  };
  return (
    <div id="team" className="team">
      <h2>Our Team Members</h2>
      <hr />
      <div
        className={`team-container ${
          view1 || view2 || view3 ? "over-exp1" : ""
        }`}
      >
        <div className={`team-item ${view1 ? "over-exp" : ""}`}>
          <div className="item-wrapper">
            <img src={Person1} alt="person" />
            <p className="team-header">Brajesh Pathak</p>
            <p className={`team-info ${view1 ? "expanded" : ""}`}>
              A Chartered Accountant & Company Secretary, has over a decade of
              experience in managing realty focused venture capital funds, and
              was heading Azure Capital Advisors Private Limited. He has also
              been instrumental in raising significant capital for various real
              estate projects and has extensive knowledge of the Indian real
              estate market. With his expertise in financial management and
              strategic planning, he has played a key role in developing and
              executing successful investment strategies for the funds he has
              managed.In addition to his professional accomplishments, he is
              actively involved in various social and charitable initiatives.
            </p>
            <p className="view" onClick={handleView1}>
              {view1 ? "View Less" : "View More"}
            </p>
          </div>
        </div>
        <div className={`team-item ${view2 ? "over-exp" : ""}`}>
          <div className="item-wrapper">
            <img src={Person2} alt="person" />
            <p className="team-header">Deepak Shukla</p>
            <p className={`team-info ${view2 ? "expanded" : ""}`}>
              Deepak Shukla has completed his B.Tech (hons.) from the Indian
              Institute of Technology (IIT) Kharagpur and obtained an MBA from
              the Indian Institute of Management (IIM) Ahmedabad, India. He has
              an overall experience of 11 years in firms like Credit Suisse,
              FICO, Alvarez and Marsal and The World Bank across geographies. In
              the past few years, his focus is in solving real world challenges
              using AI. He has engaged in development of voicebots for contact
              centres, automated training and validation for Autonomous vehicles
              applications. He has also published research papers in several
              international journals and conferences.
            </p>
            <p className="view" onClick={handleView2}>
              {view2 ? "View Less" : "View More"}
            </p>
          </div>
        </div>
        <div className={`team-item ${view3 ? "over-exp" : ""}`}>
          <div className="item-wrapper">
            <img src={Person3} alt="person" />
            <p className="team-header">Alok Kumar Singh</p>
            <p className={`team-info ${view3 ? "expanded" : ""}`}>
              Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25
              years of experience in management responsibilities in top tier
              companies including Infosys, Infosys BPO and Azure Capital.
              Co-Founded Azure Capital, a Real Estate Private Equity Fund and
              Azven Realty, a full service Real Estate Development firm in
              Bangalore. Set-up and managed a SEBI registered VC fund under
              Azure Capital. Actively involved in mentoring and advising seed
              and growth stage startups at C-Level in Visioning, Governance,
              Strategy Development & Implementation, Growth Planning, Goal
              Setting and Investment Structuring & Management.
            </p>
            <p className="view" onClick={handleView3}>
              {view3 ? "View Less" : "View More"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
