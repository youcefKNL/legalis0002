import React from "react";
// import Layout from "../components/Layout";
// import Transition from "../components/Transition";
//Avatar
// import Avatar from "../assets/avatar/cheval-multiColor.png";
//Particles
// import ParticleContainer from "../components/ParticlesContainer";
//projects
import ProjectsBtn from "../components/ProjectsBtn";
//motion
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
// import { fadeIn } from "../components/";

const Home = () => {
  return (
    <main className="homeContainer">
      <ParticlesContainer />
      <div className="homeContent">
        <div className="homeContentMain">
          <h1>
            Artisan du Web : <br /> Votre <span>Vision</span> , Ma
            <span> Création</span>
          </h1>
          <p>
            Passionné par le numérique et l'innovation, je suis un développeur
            web FullStack dédié à transformer vos idées en expériences
            numériques mémorables. Ma spécialité réside dans l'écosystème
            JavaScript. Avec une expertise complète en développement web front
            et back, je crée des solutions sur mesure qui marquent les esprits
            et propulsent vos projets vers l'excellence digitale. Explorez mon
            univers où chaque ligne de code est un coup de pinceau sur la toile
            du web, créant ainsi des expériences inoubliables et efficaces.
          </p>
        </div>
        <ProjectsBtn />
        <Avatar />
      </div>
      )
    </main>
  );
};

export default Home;
