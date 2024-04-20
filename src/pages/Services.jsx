import React from "react";
import Bulb from "../components/Bulb";
import ServiceSlider from "../components/ServiceSlider";

const Services = () => {
  return (
    <section className="servicesPage">
      <div className="servicesPage-container">
        <div className="servicesPage-intro">
          <h2>
            Mes services<span>.</span>
          </h2>
          <p>
            Découvrez mes services de développement web ainsi que mes
            compétences en pentesting et cybersécurité pour créer, maintenir et
            sécuriser votre présence en ligne. Contactez-moi dès aujourd'hui
            pour concrétiser vos projets web en toute sécurité !
          </p>
        </div>
        <ServiceSlider />
      </div>

      <Bulb />
    </section>
  );
};

export default Services;
