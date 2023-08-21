import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-1st">
          <h1>Lando</h1>
          <br />
          <h5>2021 &copy; Lando all right reserved</h5>
        </div>
        <div className="footer-2nd">
          <ul>
            <li className="footer-list">Home</li>
            <li className="footer-list">Pricing</li>
            <li className="footer-list">About us</li>
            <li className="footer-list">Contact us</li>
          </ul>
        </div>
        <div className="footer-3rd">
          <ul>
            <li className="footer-list">Facebook</li>
            <li className="footer-list">Instagram</li>
            <li className="footer-list">Twitter</li>
            <li className="footer-list">Linkedin</li>
          </ul>
        </div>
        <div className="footer-4th">
          <ul>
            <li className="footer-list">Privacy Policy</li>
            <li className="footer-list">Terms of service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
