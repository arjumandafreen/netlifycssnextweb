"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";


const Navbar = () => {
  // State to manage padding based on window size
  const [padding, setPadding] = useState("10px 12%");

  useEffect(() => {
    // Handle window resize event
    const handleResize = () => {
      setPadding(window.innerWidth <= 1700 ? "7px 8%" : "10px 12%");
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call for setting padding on load

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  // State to manage navbar background based on scroll position
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    // Handle scroll event to change navbar background
    const handler = () => {
      if (window.scrollY >= 60) {
        setNavBg(true);
      } else if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // State to manage mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header
      style={
        navBg
          ? {
              padding,
              background: "transparent",
              backdropFilter: "blur(35px)", // Applied when navbar has background
            }
          : { padding, background: "fixed" } // Default navbar style
      }
    >
      {/* Logo with link */}
      <h1>
        <Link href={"#"} className="logo">
          Hotel Pearl<span>View</span>
        </Link>
      </h1>

      {/* Navbar menu items */}
      <ul className={`navbar ${menuOpen ? "open" : ""}`}>
        <li>
          <Link className="Link" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Holiday"}>
            Holiday
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Tours"}>
            Tours
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Culture"}>
            Culture
          </Link>
        </li>
        <li>
          <Link className="Link" href={"/Contact"}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right-side section with social media links */}
      <div className="h-right">
        <li>
          <Link className="Link" href={"#"}>
            Follow
          </Link>
        </li>
        <li>
          <Link
            className="icon"
            target="_blank"
            href={"https://www.linkedin.com/in/arjumand-afreen-8a6795306/"}
          >
            <FaLinkedin />
          </Link>
        </li>

        {/* Mobile menu icon */}
        <div id="menu-icon" onClick={toggleMenu}>
          <HiBars3 />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
