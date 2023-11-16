import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
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
    <nav className={`nav ${windowSize <= 768 ? "mobile" : ""}`}>
      <ul>
        <li>
          <Link className="nav-link-item" to="*/">
            <button type="button" className="nes-btn is-warning">
              Guillaume Leroy
            </button>
          </Link>
        </li>
      </ul>
      <ul className="item-nav">
        <li>
          <Link className="nav-link-item" to="*/">
            <button type="button" className="nes-btn is-primary">
              Home
            </button>
          </Link>
        </li>

        <li>
          <Link className="nav-link-item" to="*/about">
            <button type="button" className="nes-btn is-primary">
              About
            </button>
          </Link>
        </li>
        <li>
          <Link className="nav-link-item" to="*/projet">
            <button type="button" className="nes-btn is-primary">
              Projets
            </button>
          </Link>
        </li>
        <li>
          <Link className="nav-link-item" to="*/contact">
            <button type="button" className="nes-btn is-primary">
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
