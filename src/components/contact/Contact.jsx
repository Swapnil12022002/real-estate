import React from "react";
import "./Contact.scss";
import Happy from "../../assets/happy.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="container-wrapper">
          <div className="contact-info">
            <p className="contact-header">Get In Touch With Us To Connect</p>
            <p className="contact-header2">Contact Us </p>
            <div className="contact-body">
              <div className="name">
                <fieldset>
                  <legend>Full name</legend>
                  <input type="text" />
                </fieldset>
                <p>Not more than 50 characters</p>
              </div>
              <div className="name">
                <fieldset>
                  <legend>Email Address</legend>
                  <input type="email" />
                </fieldset>
                <p>Please enter a valid email address</p>
              </div>
              <div className="name">
                <fieldset>
                  <legend>Mobile</legend>
                  <input type="number" />
                </fieldset>
              </div>
              <div className="stages">
                <fieldset>
                  <legend>Country</legend>
                  <select>
                    <option value="">Select a country</option>
                    <option value="India">India</option>
                    <option value="USA">United States of America</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Japan">Japan</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Brazil">Brazil</option>
                    <option value="China">China</option>
                  </select>
                </fieldset>
              </div>
              <div className="stages">
                <fieldset>
                  <legend>Stages</legend>
                  <select>
                    <option value="">-- Please select --</option>
                    <option value="apple">
                      I have booked but registration is not done
                    </option>
                  </select>
                </fieldset>
              </div>
            </div>
            <div className="contact-button">
              <button type="submit">Submit</button>
            </div>
          </div>
          <img src={Happy} alt="happy" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
