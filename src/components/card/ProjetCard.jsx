import React, { useEffect, useRef, useState } from "react";
import "./Card.scss";
import CradPopUp from "./CradPopUp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Flippy, { FrontSide, BackSide } from "react-flippy";

import { Carousel } from "react-responsive-carousel";

const ProjetCard = (repos) => {
  const ref = useRef();
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
  const logoUrl = repos.logoUrl; // Retrieve logoUrl from props
  const slideOne = repos.slideOne; // Retrieve slideOne from props
  const slideTwo = repos.slideTwo;
  const slideThree = repos.slideThree;

  return (
    <article className={`card flip-card  ${windowSize <= 768 ? "mobile" : ""}`}>
      <div className="card-top flip-card-inner-top nes-container is-dark with-title is-centered">
        <div className="top-container-inner">
          <img className="logo" src={logoUrl} alt="" />

          <p className="card-description ">{repos.description}</p>
        </div>
        <div className="top-back-container">
          <p className="title">{repos.name}</p>
          <div className="carousel-slide">
            <Carousel>
              <div>
                <img src={slideOne} alt="" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={slideTwo} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={slideThree} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="card-bottom  flip-card-inner  ">
        <div className="card-content-skill lists  ">
          <ul className="skills nes-list is-circle">
            {repos.topics.map((topic, index) => {
              return (
                <li key={index} className="skill ">
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flip-card-back  ">
          <p>Lien vers le repo GitHub de {repos.name}</p>
          <div className="btn-container-back">
            <a className="nes-btn is-warning" href={repos.html_url}>
              Lien GitHub
            </a>

            <CradPopUp props={repos} />
          </div>
          {/* <button className="modal-button">+ d'infos</button> */}
        </div>
      </div>
    </article>
  );
};

export default ProjetCard;
