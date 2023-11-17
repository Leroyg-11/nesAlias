import React, { useEffect, useState } from "react";
import "./css/About.scss";

const About = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [sectionToDisplay, setSectionToDisplay] = useState("parcours");
  const donePercentage = 70;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Ajouter la classe "is-success" au bouton correspondant à la section par défaut
    const defaultButton = document.querySelector(
      `.item-about a[href="${sectionToDisplay}"]`
    );
    if (defaultButton) {
      defaultButton.classList.add("is-success");
    }
  }, [sectionToDisplay]);

  const handleClick = (e) => {
    e.preventDefault();
    const a = e.target.closest("a");
    const section = a.getAttribute("href");
    setSectionToDisplay(section);

    // Ajouter la classe "is-success" au bouton cliqué
    const allButtons = document.querySelectorAll(".item-about a");
    allButtons.forEach((button) => {
      button.classList.remove("is-success");
    });
    a.classList.add("is-success");
  };

  return (
    <main
      className={`nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title">A propos</h1>

      <section className="about-container">
        <ul className="item-about-container">
          <li className="item-about       ">
            <a className="nes-btn" href="parcours" onClick={handleClick}>
              Parcours
            </a>
          </li>
          <li className="item-about       ">
            <a className="nes-btn" href="formation" onClick={handleClick}>
              Formation
            </a>
          </li>
          <li className="item-about       ">
            <a className="nes-btn" href="competences" onClick={handleClick}>
              Compétences
            </a>
          </li>
          <li className="item-about       ">
            <a className="nes-btn" href="appétence" onClick={handleClick}>
              Appétence
            </a>
          </li>
        </ul>

        {sectionToDisplay === "parcours" && (
          <article
            key="parcours"
            className="about-parcours-container about-article"
          >
            Je suis né en 1995, j'ai 28 ans. J'ai déjà un parcours professionnel
            riche et diversifié. <br />
            br Après avoir travaillé pendant 6 ans comme vendeur en boulangerie,
            suite à ça, j'ai été téléconseiller en chambre des métiers pendant 2
            ans. <br />
            J'ai ensuite travaillé quelques mois en mutuelle toujours en tant
            que téléconseiller. En mars 2023, j'ai décidé de reprendre mes
            études. J'ai entrepris une formation de développeur web.
          </article>
        )}
        {sectionToDisplay === "formation" && (
          <article
            key="formation"
            className="about-formation-container about-article"
          >
            N'ayant pas d'expérience dans le domaine du développement web il y a
            encore quelques mois, géant commencé par me former sur YouTube grâce
            des tutos. J'ai commencé ma formation d'intégrateur web d'une durée
            de 9 mois en mars 2023 avec Openclassrooms. J'ai appris les bases du
            HTML, CSS et JavaScript. La formation m'a beaucoup appris. Outre les
            langages a proprement parler, j'ai appris à me débrouiller de na mes
            recherches et mes problèmes. <br />
            Ce qui me permet aujourd'hui de créer à partir de zéro un site tel
            que celui sur lequel vous vous trouvez actuellement. <br />
            Il n'est peut etre parfait, mais il est le fruit de mon travail et
            il evolura surment avec le temps et les connaissances grandissantes.
            <br />
          </article>
        )}
        {sectionToDisplay === "competences" && (
          <article className="about-competences-container about-article">
            <ul>
              <li>
                <h2>HTML</h2>
                <div className="html-progress-container">
                  <div className="html-progress"></div>
                </div>
              </li>
              <li>
                <h2>Css</h2>
                <div className="css-progress-container">
                  <div className="css-progress"></div>
                </div>
              </li>
              <li>
                <h2>Javascript</h2>
                <div className="java-progress-container">
                  <div className="java-progress"></div>
                </div>
              </li>
              <li>
                <h2>React</h2>
                <div className="react-progress-container">
                  <div className="react-progress"></div>
                </div>
              </li>
            </ul>
          </article>
        )}
        {sectionToDisplay === "appétence" && (
          <article className="about-appetence-container about-article">
            {/* Contenu pour la section "appétence" */}
            Les sujets et languages ue j'aimerais appréhender
          </article>
        )}
      </section>
    </main>
  );
};

export default About;
