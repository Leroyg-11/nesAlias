import React, { useEffect, useState } from "react";
import "./css/About.scss";
import Typed from "react-typed";

const About = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main
      className={`nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title">A propos</h1>

      <section className="message-list">
        <section className="message -left">
          <i className="nes-bcrikko"></i>

          <div className="nes-balloon from-left is-dark">
            <p>
              Je m'appelle Guillaume Leroy. <br />
              <br />
            </p>
          </div>
        </section>

        <section className="message -right">
          <i className="nes-bcrikko"></i>
          <div className="nes-balloon from-right is-dark">
            <p>
              Développeur Web Junior à Lille, j'ai 28 ans. Suite à une
              reconversion de carrière, j'ai décidé de me lancer dans le
              développement web.
            </p>
          </div>
        </section>

        <section className="message -left">
          <i className="nes-bcrikko"></i>

          <div className="nes-balloon from-left is-dark">
            <p>
              J'ai suivi une formation et des cours en ligne pour maîtriser les
              langages de programmation, notamment HTML, CSS, JavaScript, ainsi
              que des frameworks populaires tels que React et NodeJS. <br />
              Mon ambition est de m'investir dans des projets stimulants,
              d'acquérir une expérience pratique significative, et de participer
              à la création de solutions créatives et innovantes. Je suis
              actuellement ouvert aux opportunités de stage ou d'emploi dans le
              domaine du développement web.
            </p>
          </div>
        </section>
      </section>
      <div className="about-mobile-container">
        <Typed
          className="typed-text-about"
          strings={[
            `Je m'appelle Guillaume Leroy. Développeur Web Junior à Lille, j'ai 28 ans. Suite à une
            reconversion de carrière, j'ai décidé de me lancer dans le
            développement web. J'ai suivi une formation et des cours en ligne pour maîtriser les
            langages de programmation, notamment HTML, CSS, JavaScript, ainsi
            que des frameworks populaires tels que React et NodeJS. <br />
            Mon ambition est de m'investir dans des projets stimulants,
            d'acquérir une expérience pratique significative, et de participer
            à la création de solutions créatives et innovantes. Je suis
            actuellement ouvert aux opportunités de stage ou d'emploi dans le
            domaine du développement web.`,
          ]}
          typeSpeed={1}
        />
      </div>
    </main>
  );
};

export default About;
