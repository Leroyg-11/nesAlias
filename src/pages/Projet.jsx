import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Projet.scss";

import CardFlipped from "../components/card/CardFlipped";
import CarouselFlipp from "../components/card/CarouselFlipp";

// import CarouselTest from "../components/card/Carousel";
// import CarouselProjet from "../components/card/CarouselProjet";

const Projet = (repo) => {
  const [isActive, setIsActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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
  const [repos, setRepos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null); // Ajoutez un état pour le sujet sélectionné

  const getRepos = () => {
    axios
      .get("https://api.github.com/users/Leroyg-11/repos")
      .then((res) => {
        // console.log(res.data);
        setRepos(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getRepos(); // Call the 'getRepos' function when the component mounts
  }, []);

  const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);

  const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;
  const slideOne = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-1.jpeg`;
  const slideTwo = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-2.jpeg`;
  const slideThree = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-3.jpeg`;

  return (
    <main
      className={`nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title">Mes réalisations</h1>

      <section className="carousel-flip">
        <CarouselFlipp />
      </section>
      <section className="projet-container">
        {reposWithOneStar.map((repo) => {
          const logoUrl = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Logo.png`;
          const slideOne = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-1.jpeg`;
          const slideTwo = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-2.jpeg`;
          const slideThree = `https://raw.githubusercontent.com/Leroyg-11/${repo.name}/main/Slide/slide-3.jpeg`;

          return (
            <CardFlipped
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              topics={repo.topics}
              language={repo.language}
              logoUrl={logoUrl}
              slideOne={slideOne}
              slideTwoe={slideTwo}
              slideThree={slideThree}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Projet;
