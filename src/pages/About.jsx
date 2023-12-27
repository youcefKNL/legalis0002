import React, { useState } from "react";
import aboutData from "../pages/api/about.json";
import Avatar from "../components/Avatar";
import CountUp from "react-countup";

const About = ({ nav }) => {
  const [index, setIndex] = useState(0);

  return (
    <section className={`aboutContainer ${nav?.isActive ? "nav-active" : ""}`}>
      <div className="aboutContainerRight">
        {/* <h2>A Propos</h2> */}
        <div className="list">
          {aboutData.map((item, itemIndex) => (
            <div
              className={`${index === itemIndex ? "selected" : "notSelected"} `}
              key={itemIndex}
              onClick={() => {
                setIndex(itemIndex);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
        <ul className={`listContainer ${aboutData[index].title}`}>
          {aboutData[index].info.map((item, itemIndex) => (
            <li key={itemIndex} className={item.title}>
              {Array.isArray(item) ? (
                // Si c'est un tableau (cas des sections "expérience" et "dark_XP")
                item.map((text, textIndex) => <div key={textIndex}>{text}</div>)
              ) : (
                // Sinon, c'est un objet (cas de la section "compétences")
                <>
                  {item.icon && (
                    <img src={item.icon} alt={`Logo 3d de ${item.text}`} />
                  )}
                  <span>{item.text || item}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="aboutContainerLeft">
        <Avatar />
        <h2>
          Explorateur du <span>Web</span> et Gardien de la
          <span> Cybersécurité</span>
        </h2>
        <p>
          Bienvenue sur mon portfolio! <br /> Mon parcours de reconversion
          gravite autour de ma passion pour le web et de ma détermination à
          assurer sa sécurité.
          <br />
          J'ai trouvé ma véritable vocation dans le développement et la
          cybersécurité. Je n'hésite pas à affirmer que ma force réside dans ma
          reconversion, où les soft skills acquis se mêlent harmonieusement à ma
          passion. Chaque ligne de code que je crée devient une nouvelle
          aventure dans cette quête constante pour explorer, créer, et protéger.
          <br />
          Mon engagement envers la cybersécurité est une mission profonde, une
          quête pour protéger les données et garantir la sécurité en ligne.
          <br />
          Rejoignez-moi dans cette fusion entre la passion pour le web et le
          rôle de gardien de la cybersécurité, où la créativité rencontre la
          sécurité numérique, et où la force de la reconversion devient une
          puissante alliée dans ce monde en constante évolution.
        </p>
        <div className="aboutContainerLeftCounter">
          <div className="xp">
            <CountUp start={0} end={3} duration={10} /> +
          </div>
          <div className="xpText">
            année <br />
            d'éxpérience
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
