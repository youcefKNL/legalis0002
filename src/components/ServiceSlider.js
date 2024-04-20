// icons
import { RxRocket } from "react-icons/rx";
import { GrServerCluster } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { GrVulnerability } from "react-icons/gr";

//import swiper Module

import { register } from "swiper/element/bundle";
import "swiper/css";
register();

// data
const serviceData = [
  {
    icon: <MdDeveloperMode />,
    title: "Développement Front-end",
    description:
      "Je me spécialise dans la création d'interfaces utilisateur et d'expériences en utilisant des technologies frontales modernes telles que HTML, CSS, et les frameworks JavaScript comme React.js ou Vue.js.",
  },
  {
    icon: <GrServerCluster />,
    title: "Développement Back-end",
    description:
      "Je développe des applications côté serveur robustes et évolutives en utilisant des langages comme Node.js, Python, ou Java. J'ai de l'expérience dans la création d'API RESTful et le travail avec des bases de données telles que MongoDB ou SQL.",
  },
  {
    icon: <MdDesignServices />,
    title: "Conception UI/UX",
    description:
      "Je crée des designs intuitifs et visuellement attrayants qui améliorent la satisfaction et la convivialité de l'utilisateur. J'utilise des outils comme Figma ou Sketch pour concevoir des maquettes et des prototypes.",
  },
  {
    icon: <MdEditDocument />,
    title: "Rédaction de Contenu",
    description:
      "Je rédige un contenu convaincant et engageant pour les sites Web et les blogs. De la documentation technique aux articles optimisés pour le référencement, je veille à ce que le contenu résonne avec le public cible.",
  },
  {
    icon: <RxRocket />,
    title: "Optimisation SEO",
    description:
      "J'optimise les sites Web pour les moteurs de recherche afin d'améliorer leur visibilité et leur classement sur les pages de résultats des moteurs de recherche (SERP). J'implémente des stratégies SEO sur la page et hors page pour générer du trafic organique.",
  },
  {
    icon: <GrVulnerability />,
    title: "Test d'Intrusion et Audit ",
    description:
      "Tests d'intrusion, détection de vulnérabilités, analyse des incidents et réponse aux cybermenaces pour renforcer la sécurité de vos systèmes.",
  },
];

const ServiceSlider = () => {
  return (
    <swiper-container
      // init="false"
      slides-per-view="2"
      space-between="20"
      //barre horizontale visualisation
      // scrollbar-clickable="true"
      mousewheel-invert="true"
      breakpoints={JSON.stringify({
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      })}
      // pagination="true"
      pagination={{ clickable: true }}
      //Fléche de navigation
      // navigation="true"
      // change le curseur en une icône pouvant être saisie.
      grab-cursor="true"
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
      {serviceData.map((item, index) => (
        <swiper-slide key={index}>
          <div className="serviceSlider-wrap">
            <div className="serviceSlider">
              <div className="icon">{item.icon}</div>
              <h3 className="title">
                {item.title}
                <span>.</span>
              </h3>
              <p className="description">{item.description}</p>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default ServiceSlider;
