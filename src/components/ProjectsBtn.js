import { NavLink } from "react-router-dom";
import ImgProjectsCenter from "../assets/badge/centre-badge.png";
import ImgProjectsBorder from "../assets/badge/bordure-badge2.png";

const ProjectsBtn = () => {
  return (
    <div className="badgeContainer">
      <NavLink to="/projet">
        <img src={ImgProjectsCenter} alt="" />
        <img src={ImgProjectsBorder} alt="" />
      </NavLink>
    </div>
  );
};

export default ProjectsBtn;
