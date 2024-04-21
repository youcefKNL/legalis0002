import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Socials = () => {
  return (
    <div className="socialLink">
      <ul>
        <li>
          <NavLink to="https://www.linkedin.com/in/youcef-knl/" target="_blank">
            <FaLinkedin />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://github.com/youcefKNL" target="_blank">
            <FaGithub />
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="https://whatsapp.fr" target="_blank">
            <FaWhatsapp />
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
