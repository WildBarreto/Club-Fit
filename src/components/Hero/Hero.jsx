import React from "react";
import Header from "../Header/Header";

import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>A melhor academia da cidade</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Molde </span>
            <span>seu</span>
          </div>
          <div>
            <span>Corpo ideal</span>
          </div>
          <div>
            <span>
              Aqui vamos ajudá-lo a moldar e construir o seu corpo ideal e viver
              a vida ao máximo
            </span>
          </div>
        </div>

        {/*Figuras */}
        <div className="figures">
          <div>
            <span>+ 140 </span>
            <span>Treinadores especialistas</span>
          </div>
          <div>
            <span>+ 978 </span>
            <span>Memebros</span>
          </div>
          <div>
            <span> +50 </span>
            <span>Prorgramas de treino</span>
          </div>
        </div>

        <div className="hero-buttons">
          <buttons className="btn">Começar</buttons>
          <buttons className="btn">saiba mais</buttons>
        </div>
      </div>
      {/*rigth */}

      <div className="right-h">
        <button className="btn">Cadastre-se</button>

        <div className="heart-rate">
          <img src={Heart} alt="Coração" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>
        {/*Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
};

export default Hero;
