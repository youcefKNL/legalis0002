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

// import { fadeIn } from "../components/";

const Home = () => {
  return (
    <main className="homeContainer">
      <div className="homeContent">
        <div className="homeContentMain">
          <h1>
            Artisan du Web : <br /> Votre <span>Vision</span> , Ma
            <span> Création</span>
          </h1>
          <p>
            Passionné par l'innovation numérique, je suis un codeur en
            reconversion vers la cybersécurité. Expert en JavaScript, je crée
            des expériences web sur mesure tout en renforçant la sécurité de vos
            systèmes. Explorez mon univers où chaque ligne de code est une étape
            vers l'excellence digitale et la protection contre les cybermenaces.
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
