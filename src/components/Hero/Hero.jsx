import React from "react";
import Header from "../Header/Header";

import "./Hero.css";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import NumberCounter from "number-counter";

import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />{" "}
            </span>
            <span>Treinadores especialistas</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />{" "}
            </span>
            <span>Memebros</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={0} delay="4" preFix="+" />{" "}
            </span>
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

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Coração" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/*Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/*Calories */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calorias" />
          <div>
            <span>Calorias perdidas </span>
            <span>220k cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
