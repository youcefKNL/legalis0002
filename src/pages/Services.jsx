import React from "react";
import Bulb from "../components/Bulb";
import ServiceSlider from "../components/ServiceSlider";

const Services = () => {
  return (
    <section className="servicesPage">
      <div className="one">
        <div className="two">
          <div className="three">
            <h2>
              {" "}
              My services<span>.</span>{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              suscipit.
            </p>
          </div>
          <ServiceSlider />
        </div>
      </div>

      <Bulb />
    </section>
  );
};

export default Services;
