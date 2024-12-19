import Link from "next/link";
import React from "react";

const Homes = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/img/Background.png')`,
        backgroundSize: "cover", // Ensures the background image covers the entire section.
        backgroundPosition: "center", // Centers the background image within the section.
      }}
      className="homes"
    >
      <div className="homes-text">
        
        <h1 style={{ fontSize: "3.5rem" }}>Feel the Pearl Difference</h1>

        <p>
          More than 50 years of hospitality experience brings you the best hotels in Pakistan, where luxury meets tradition, and every stay is a journey of refined elegance and unparalleled comfort.{" "}
          <br />
          Overlooking the sprawling city, Hotel Pearl Karachi is a part of the most significant chain of hotels in Pakistan. The Hotel is perfect for both business and leisure travelers. Guests can choose from a variety of rooms and suites to enjoy their stay at the five-star hotel.
        </p>
        <Link href={"#"}>
          <button className="btn">Booking Continues</button>
        </Link>
      </div>
    </section>
  );
};

export default Homes;
