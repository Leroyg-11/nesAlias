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
            Je suis né en 1995, j'ai 28 ans. J'ai déjà un parcours professionnel
            riche et diversifié. <br />
            <br /> Après avoir travaillé durant 6 années comme vendeur en
            boulangerie, j'ai occupé un poste de téléconseiller d'abord à la
            Chambre des métiers pendant 2 ans puis quelques mois pour une
            mutuelle. <br />
            <br />
            En mars 2023, j'ai décidé de reprendre les études et entrepris une
            formation de développeur Web.
          </article>
        )}
        {sectionToDisplay === "formation" && (
          <article
            key="formation"
            className="about-formation-container about-article"
          >
            N'ayant pas d'expérience dans le domaine du développement web j'ai
            commencé à m'y intéresser de façon autodidacte en suivant par
            exemple des tutos sur youtube. Puis j'ai intégré, en mars 2023, la
            formation "développeur web" de Openclassrooms pour une durée de 9
            mois. J'ai pu y apprendre les bases du HTML, CSS et JavaScript.
            <br />
            <br />
            Outre le langage, j'ai appris à résoudre les problèmes liés au
            développement de façon autonome. Ce qui me permet aujourd'hui de
            créer de A à Z un site tel que celui sur lequel vous vous trouvez
            actuellement. Il n'est peut-être pas parfait, mais il est le fruit
            de mon travail et il évoluera surement avec le temps et
            l'enrichissement de mes compétences et connaissances.
            <br />
          </article>
        )}
        {sectionToDisplay === "competences" && (
          <article className="about-competences-container about-article">
            <ul>
              <li>
                <p>React</p>
                <div className="progress-container">
                  <div className="react-progress"></div>
                </div>
              </li>
              <li>
                <p>Javascript</p>
                <div className="progress-container">
                  <div className="java-progress"></div>
                </div>
              </li>
              <li>
                <p>HTML</p>
                <div className="progress-container">
                  <div className="html-progress"></div>
                </div>
              </li>
              <li>
                <p>Css</p>
                <div className="progress-container">
                  <div className="css-progress"></div>
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
