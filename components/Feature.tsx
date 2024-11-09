import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature-content">
        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/image.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Cosmic Journeys  </h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/ppl.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4> Cosmic Journeys    </h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/ano.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Cosmic Journeys    </h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/get.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Cosmic Journeys    </h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/non5.png"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Cosmic Journeys  </h4>
        </div>


      </div>
    </section>
  );
};

export default Feature;
