import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="footer section__padding ">
      <div className="footer-heading">
        <h1 className="gradiant__text">sed rutrum augue consequat id rutrum</h1>
        <div className="footer-btn">
          <p>Reguest early access</p>
        </div>
        <div className="footer-links">
          <div className="footer-links-logo">
            <img src={logo} alt="logo" />
            <p>lorem ipsum edtura</p>
          </div>
          <div className="footer-links_div">
            <h4>links</h4>
            <p>Social Media</p>
            <p>counters</p>
            <p>Contact</p>
            <p>Overons</p>
          </div>
          <div className="footer-links_div">
            <h4>Company</h4>
            <p>Terms &Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="footer-links_div">
            <h4>Get in Touch</h4>
            <p>Tampere 33270 </p>
            <p>058558585858</p>
            <p>gpt@pay.now</p>
          </div>
        </div>
        <div className="footer-copyright">All Right Reserved@2023</div>
      </div>
    </div>
  );
};

export default Footer;
