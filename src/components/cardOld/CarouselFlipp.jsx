import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

import CardFlipped from "./CardFlipped";

const CarouselFlipp = ({ repos }) => {
  const reposWithOneStar = repos.filter((repo) => repo.stargazers_count === 1);

  return (
    <div>
      <Carousel>
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
              slideTwo={slideTwo}
              slideThree={slideThree}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselFlipp;
