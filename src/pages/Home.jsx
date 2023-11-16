import React, { useEffect, useState } from "react";
import "./Home.scss";
import Avatar from "../assets/fotor.jpg";

const Home = () => {
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
      className={`main-home nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title"> Bienvenue ! </h1>

      <section className="home-section">
        <div className="home-left-side">
          <div className="mobile-top-container">
            <img src={Avatar} alt="" width="400px" />

            {/* <Typed
              className="typed-text-home"
              strings={[
                `Bonjour, je suis <br><span class="name-size">Guillaume Leroy</span><br
              />
              Développeur Web Junior.`,
              ]}
              typeSpeed={40}
            /> */}
          </div>
          <div className="btn-home-container">
            <button className="nes-btn ">
              <p>En savoir plus</p>
            </button>
            <button className="nes-btn ">
              {" "}
              <p>Me contacter</p>{" "}
            </button>
          </div>
        </div>

        <div className="home-right-side">
          <img src={Avatar} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
