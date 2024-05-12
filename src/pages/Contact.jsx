import React from "react";
import avatar from "../assets/avatar/avatar gorilla.png";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import test from "../assets/éclair/test5.png";

const Contact = () => {
  return (
    <section className="contact">
      <div className="avatarContactContainer">
        <img src={avatar} alt="" className="avatar" />
      </div>

      <div className="contactContainer">
        <h2>
          Prenons contact <span>.</span>
        </h2>
        <p>
          Envie de discuter de votre prochain projet ou de partager des idées
          innovantes ? N'hésitez pas à me contacter sur LinkedIn ! C'est
          toujours un plaisir d'échanger et de collaborer. Je vous attends avec
          impatience pour créer ensemble quelque chose d'exceptionnel. <br />
          <NavLink
            to="https://www.linkedin.com/in/youcef-knl/"
            target="_blank"
            className="iconLink"
          >
            <FaLinkedin />
          </NavLink>
        </p>
      </div>
      {/* <img src={test} alt="" className="tourbillon" /> */}
    </section>
  );
};

export default Contact;
