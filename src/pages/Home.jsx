import React, { useEffect, useState } from "react";
import "./Home.scss";
import Avatar from "../assets/fotor.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";

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
            <TypeAnimation
              className="type-animation"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Bonjour, je m'appelle ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Bonjour, je m'appelle Guillaume Leroy",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Bonjour, je m'appelle Guillaume Leroy et je suis développeur web",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Bonjour, je m'appelle Guillaume Leroy et je suis euh.. plutot : développeur web Junior",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
              }}
            />
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
      <div>
        <FlippingCard>
          <FlippingCardBack>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundImage: "url(https://i.imgur.com/wjbYGNv.jpg)",
              }}
            ></div>
          </FlippingCardBack>
          <FlippingCardFront>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundImage: "url(https://i.imgur.com/3sKjY8V.jpg)",
              }}
            ></div>
          </FlippingCardFront>
        </FlippingCard>
      </div>
    </main>
  );
};

export default Home;
