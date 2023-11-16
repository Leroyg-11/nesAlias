import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Error = () => {
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
      className={`error nes-container is-dark with-title ${
        windowSize <= 768 ? "mobile" : ""
      }`}
    >
      <h1 className="title"> Erreur ! </h1>

      <p>
        <Link className="nav-link-item" to="/nesAlias/">
          <button type="button" className="nes-btn is-success">
            Retour a la page d'accueil
          </button>
        </Link>
      </p>
    </main>
  );
};

export default Error;
