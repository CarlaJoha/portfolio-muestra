import React from "react";
import { Carousel } from "react-carousel3";
import css from "../../assets/imgSkills/css2.png";
import html from "../../assets/imgSkills/htm.png";
import js from "../../assets/imgSkills/js.png";
import node from "../../assets/imgSkills/Nodejs.png";
import postgres from "../../assets/imgSkills/postgres.png";
import react from "../../assets/imgSkills/react.png";
import redux from "../../assets/imgSkills/redux.png";
import git from "../../assets/imgSkills/git.png";

const Skills = () => {

  return (
    <section className="section-skills" id="skills">
     <div className="title-skills"> 
      <h1 >Skills </h1><a className="volverInicio" href="#layout">
          {"<<"} Inicio {">>"}
        </a> 
      
     </div>
      
      <div className="carousel-container">
        <Carousel
          height={360} //360
          width={1000} //680
          yOrigin={142} //142
          yRadius={48} //48
          autoPlay={true}
        >
          <div key={1} className="icon-container">
            <img alt="css" src={css} className="img-skill" />
            <label>CSS</label>
          </div>
          <div key={2} className="icon-container">
            <img alt="html" src={html} className="img-skill" />
            <label>HTML</label>
          </div>
          <div key={3} className="icon-container">
            <img alt="js" src={js} className="img-skill" />
            <label>JAVASCRIPT</label>
          </div>
          <div key={4} className="icon-container">
            <img alt="node" src={node} className="img-skill" />
            <label>NODEjs</label>
          </div>
          <div key={5} className="icon-container">
            <img alt="postgres" src={postgres} className="img-skill" />
            <label>POSTGRES</label>
          </div>
          <div key={6} className="icon-container">
            <img alt="react" src={react} className="img-skill" />
            <label>REACT</label>
          </div>
          <div key={7} className="icon-container">
            <img alt="redux" src={redux} className="img-skill" />
            <label>REDUX</label>
          </div>
          <div key={8} className="icon-container">
            <img alt="git" src={git} className="img-skill" />
            <label>GIT</label>
          </div>
        </Carousel>
      </div>
      <div className="anchor-container">
      <a className="anterior" href="#about">
          {"<<"} Anterior {">>"} 
        </a>
        <a className="siguiente" href="#projects">
          {"<<"} Siguiente {">>"}
        </a>
      </div>
    </section>
  );
};

export default Skills;