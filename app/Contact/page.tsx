import Link from "next/link"; // Importing Next.js Link component for navigation
import React from "react"; 

const Newsletter = () => {
  return (
    <section className="newsletter"> 
      <div className="newsletter-content"> 
        <div className="newsletter-text"> 
          <h2>Exited to Explore?</h2> 
          <p>Stay at Hotel Pearl and enjoy all the facilities</p> {/* Supporting text for the heading */}
        </div>

        <form action=""> {/* Form for collecting email input */}
          <input type="email" placeholder="Email" required /> {/* Email input field */}
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
