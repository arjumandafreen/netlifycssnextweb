"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const [padding, setPadding] = useState("10px 12%");

  useEffect(() => {
    const handleResize = () => {
      setPadding(window.innerWidth <= 1700 ? "7px 8%" : "10px 12%");
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call for setting padding on load

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
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

  // Navbar mobile
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
              backdropFilter: "blur(35px)",
            }
          : { padding, background: "fixed" }
      }
    >
      <h1>
        <Link href={"#"} className="logo">
          Hotel Pearl<span>View</span>
        </Link>
      </h1>
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
        <div id="menu-icon" onClick={toggleMenu}>
          <HiBars3 />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
