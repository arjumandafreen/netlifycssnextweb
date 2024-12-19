import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Footer Box for Services */}
        <div className="footer-box" style={{ marginBottom: "20px" }}>
          <h3>Services</h3>
          <p>Email Marketing</p>
          <p>Campaigns</p>
          <p>Branding</p>
          <p>Offline</p>
        </div>

        {/* Footer Box for About */}
        <div className="footer-box" style={{ marginBottom: "20px" }}>
          <h3>About</h3>
          <p>Our Story</p>
          <p>Careers</p>
        </div>

        {/* Footer Box for Help */}
        <div className="footer-box" style={{ marginBottom: "20px" }}>
          <h3>Help</h3>
          <p>Contact Us</p>
        </div>

        {/* Footer Box for Social Media Links */}
        <div className="footer-box" style={{ marginBottom: "20px" }}>
          <h3>Social</h3>
          <div className="social" style={{ marginTop: "10px" }}>
            <Link
              className="icon"
              target="_blank"
              href="https://www.linkedin.com/in/arjumand-afreen-8a6795306/"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                textDecoration: "none",
                color: "black",
              }}
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </footer>

      {/* Copyright Information */}
      <div
        className="copyright"
        style={{
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "#f1f1f1",
          width: "100%",
        }}
      >
        <p>&copy; 2024 by Arjumand Afreen</p>
      </div>
    </div>
  );
};

export default Footer;
