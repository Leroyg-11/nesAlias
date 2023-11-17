import React, { useEffect, useState } from "react";
import "./css/About.scss";

const About = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [sectionToDisplay, setSectionToDisplay] = useState("parcours");

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
    console.log("Button clicked", section);
    setSectionToDisplay(section);

    // Ajouter la classe "is-success" au bouton cliqué
    const allButtons = document.querySelectorAll(".item-about a");
    allButtons.forEach((button) => {
      button.classList.remove("is-success");
    });
    a.classList.add("is-success");
  };
  console.log("Current section:", sectionToDisplay);

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
            id="parcours"
            className="about-parcours-container about-article"
          >
            Mon parcours avant la formation
          </article>
        )}
        {sectionToDisplay === "formation" && (
          <article
            key="formation"
            className="about-formation-container about-article"
          >
            {/* Contenu pour la section "formation" */}
            Comment c'est passé ma formation
          </article>
        )}
        {sectionToDisplay === "competences" && (
          <article className="about-competences-container about-article">
            {/* Contenu pour la section "competences" */}
            Les compétences acquises pendant la formation{" "}
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
