import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projet from "./pages/Projet.jsx";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const App = () => {
  const ErrorCustom = () => {
    return (
      <div>
        <h1>Erreur personnalisée</h1>
        <p>L'URL que vous avez saisie est incorrecte.</p>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nesAlias/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projet" element={<Projet />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
