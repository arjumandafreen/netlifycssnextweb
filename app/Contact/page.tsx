import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Exited to Explore?</h2>
          <p>Stay at Hotel Pearl and enjoy all the facilities</p>
        </div>

        <form action="">
          <input type="email" placeholder="Email" required />
          <button className="btn">
            <Link className="btn-link" href={"#"}>
              Started 
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
