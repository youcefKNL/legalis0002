// import { HiArrowRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import ImgProjectsCenter from "../assets/badge/centre-badge.png";
import ImgProjectsBorder from "../assets/badge/bordure-badge.png";

const ProjectsBtn = () => {
  return (
    <div className="projectsBtn">
      <NavLink to="/projet" className="badgeContainer">
        <img src={ImgProjectsCenter} alt="" />
        <img src={ImgProjectsBorder} alt="" />
        {/* <HiArrowRight /> */}
      </NavLink>
    </div>
  );
};

export default ProjectsBtn;
