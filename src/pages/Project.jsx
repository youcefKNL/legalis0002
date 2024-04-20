import React from "react";
import WorkSlider from "../components/WorkSlider";
import Bulb from "../components/Bulb";

const Project = () => {
  return (
    <section className="projectsPage">
      <div className="projectsPage-container">
        <div className="projectsPage-intro">
          <h2>
            Mes projets<span>.</span>
          </h2>
          <p>
            Découvrez mes compétences en développement web, allant de la
            création de superbes interfaces utilisateur avec React à la mise en
            œuvre sécurisée de serveurs et d'API robustes avec Node.js. En
            combinant expertise technique et pratique de sécurité OSINT, je
            m'engage à garantir la confidentialité, l'intégrité et la
            disponibilité de vos applications en ligne. Contactez-moi dès
            aujourd'hui pour des solutions web fiables et sécurisées !
          </p>
        </div>
        <WorkSlider />
      </div>
      <Bulb />
    </section>
  );
};

export default Project;
