import React, { useState } from "react";
import aboutData from "../pages/api/about.json";

const About = ({ nav }) => {
  const [index, setIndex] = useState(0);

  return (
    <section className={`aboutContainer ${nav?.isActive ? "nav-active" : ""}`}>
      <h1>A Propos</h1>
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
    </section>
  );
};

export default About;
