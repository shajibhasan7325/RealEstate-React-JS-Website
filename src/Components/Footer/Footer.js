import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaPinterest className="icon" />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};
