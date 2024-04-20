import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";
// import socialLogo1 from "../assets/"

const Header = () => {
  return (
    <header>
      <div className="portfolioName">
        <NavLink to="/">
          <span>khenichil</span> youcef
          {/* 🚀 */}
        </NavLink>
      </div>
      <Socials />
    </header>
  );
};

export default Header;
