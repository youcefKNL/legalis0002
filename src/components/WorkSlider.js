import workSlides from "../pages/api/project.json";

import { FaGithub } from "react-icons/fa";
// import { TbWorldWww } from "react-icons/tb";

//import swiper Module

import { register } from "swiper/element/bundle";
import "swiper/css";
register();

const WorkSlider = () => {
  const handleGitHubClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <swiper-container
      // init="false"

      slidesPerView="1"
      speed="500"
      grabCursor={true}
      autoplay={{ delay: 30 }}
      space-between="10"
      //barre horizontale visualisation
      // scrollbar-clickable="true"
      mousewheel-invert="true"
      pagination="true"
      // pagination={{ clickable: true }}
      //Fléche de navigation
      navigation="true"
      // change le curseur en une icône pouvant être saisie.
      // grab-cursor="true"
      //css
      style={{
        "--swiper-navigation-color": "#ff0000",
        "--swiper-pagination-color": "#ff0000",
        "--swiper-pagination-bottom": "0px",
        "--swiper-pagination-bullet-size": "1em",
        "--swiper-pagination-bullet-inactive-color": "ivory",
        "--swiper-pagination-bullet-inactive-opacity": "1",
      }}
    >
      {workSlides.map((project, index) => (
        <swiper-slide key={index}>
          <div className="projectSlider-wrap">
            <div className="projectSlider">
              <img src={project.picture} alt={project.title} />
              <div className="projectDescription">
                <h3>{project.title}</h3>
                <p>{project.mission}</p>
                <FaGithub
                  onClick={() => handleGitHubClick(project.moreInfo)}
                  className="icon"
                />
                {/* <TbWorldWww
                  onClick={() => handleGitHubClick(project.siteUrl)}
                /> */}
              </div>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default WorkSlider;
