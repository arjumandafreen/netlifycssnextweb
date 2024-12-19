import React from "react";
import Image from "next/image";
import Link from "next/link";

const Holiday = () => {
  return (
    <section className="holiday">
      <div className="holiday-img">
        <Image
          src={"/img/viq.png"}
          alt="holiday img" // Comment 1: This is the alternative text for the image, useful for accessibility.
          width={2000}
          height={2000}
        />
      </div>
      <div className="holiday-text">
        <h5> A World of Privilege  </h5>
        <h2>How was the stay at Hotel Pearl?</h2>
        <p>
          Become a member of a select group of individuals who enjoy exclusive benefits across all our hotels. Ranging from dining privileges to spa and wellness discounts.
        </p>
        <div className="btn">
          <Link className="btn-link" href={""}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Holiday; // Comment 2: Exporting the Holiday component to be used in other parts of the application.
