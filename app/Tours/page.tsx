import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tour = () => {
  return (
    <section className="tour">
      <div className="center-text">
        <h2>Reasons to Stay Here</h2>
      </div>
      <div className="tour-content">
        <div className="box">
          <Image
            src={"/img/east2.png"}
            alt="tour img" // Comment: Descriptive alt text for accessibility and better SEO.
            height={2000}
            width={2000}
          />
          <h6>Amazing Hotel</h6>
          <h4>Feel happy with our services</h4>
        </div>

        <div className="box">
          <Image
            src={"/img/bed.png"}
            alt="tour img"
            height={2000}
            width={2000}
          />
          <h6>Amazing Hotel</h6>
          <h4>Feel happy with our services</h4>
        </div>

        <div className="box">
          <Image
            src={"/img/bea.png"}
            alt="tour img"
            height={2000}
            width={2000}
          />
          <h6>Amazing Hotel</h6>
          <h4>Feel Happy with our Services</h4>
        </div>
      </div>
      <div className="center-btn">
        <div className="btn">
          <Link className="btn-link" href={""}>
            Think for Staying
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tour;
