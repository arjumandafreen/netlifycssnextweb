import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-box">
          <h3>Services</h3>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>

        <div className="footer-box">
          <h3>About</h3>
          <p>Our Story</p>
          <p>Careers</p>
        </div>

        <div className="footer-box">
          <h3>Help</h3>
          <p>Contact Us</p>
        </div>

        <div className="footer-box">
          <h3>Social</h3>
          <div className="social">
            <div>
              <Link
                className="icon"
                target="_blank"
                href="https://www.linkedin.com/in/arjumand-afreen-8a6795306/"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="copyright">
        <p>&copy; 2024 by Arjumand Afreen</p>
      </div>
    </div>
  );
};

export default Footer;
