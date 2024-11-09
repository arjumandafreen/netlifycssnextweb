import Link from "next/link";
import React from "react";

const Homes = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/img/Background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="homes"
    >
      <div className="homes-text">
        <h5>Lets</h5>
        <h1>
        Feel the Pearl difference
        </h1>
        <p>
        More than 50 years of hospitality experience brings you the best hotels in Pakistan, where luxury meets tradition, and every stay is a journey of refined elegance and unparalleled comfort. {" "}
          <br /> Overlooking the sprawling city, Hotel Pearl Karachi is a part of the most significant chain of hotels in Pakistan. The Hotel is perfect for both business and leisure travellers. Guests can choose from a variety of rooms and suites to enjoy their stay at the five-star hotel.
        </p>
        <button className="btn">
          <Link className="btn-link" href={"#"}>Booking continuees</Link>
        </button>
      </div>
    </section>
  );
};

export default Homes;
