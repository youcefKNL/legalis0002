import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Socials = () => {
  return (
    <div className="socialLink">
      <ul>
        <li>
          <NavLink to="https://linkedin.fr" target="_blank">
            <FaLinkedin />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://github.fr" target="_blank">
            <FaGithub />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://whatsapp.fr" target="_blank">
            <FaWhatsapp />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
