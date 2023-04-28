import img  from './assets/iconImagen.png'
import imgFormulario1 from "./assets/proyectosImg/FormularioCitas2.png"
import imgCalculadora from "./assets/proyectosImg/calculadora.png"
import imgTestimonios from "./assets/proyectosImg/Testimonios.png"
import imgContador from "./assets/proyectosImg/contador.png"
export const projects = [
  {
    id:1,
    name: "Rick and Morty",
    description: "Proyecto 1",
    tecnologies: "Javascript, React, Redux, HTML, CSS",
    image: img,
    link: "Link del dominio",
    date: 2023,
  },
  {
    id:2,
    name: "Formulario para citas",
    description: "Formulario realizado con React-Vite, con diferentes campos controlados a llenar, muestra del uso de localStorage para almacenar las citas creadas con la posibilidad de eliminarlas",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgFormulario1,
    link: "https://formulariocitas-jdt-carlajoha.netlify.app/",
    date: 2023,
  },
  {
    id:3,
    name: "Calculadora",
    description: "Calculadora Sencilla",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgCalculadora,
    link: " https://calculadora-react-vite.netlify.app",
    date: 2023,
  },
  {
    id:4,
    name: "Sección de Testimonio",
    description: "Muestra de sección de testimonios responsive",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgTestimonios,
    link: "https://carlajoha-testimonios-react.netlify.app",
    date: 2023,
  },
  {
    id:5,
    name: "Contador",
    description: "Proyecto contador que aumenta y disminuye",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgContador,
    link: "https://carlajoha-contador.netlify.app",
    date: 2023,
  },
];


/*import "./Skills.css";
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
      <h1 >Skills</h1> 
      <a className="volverInicio" href="#layout">
          {"<<"} Inicio {">>"}
        </a>
     </div>
      
      <div className="carousel-container">
        <Carousel
          height={300} //360
          width={900} //680
          yOrigin={142} //142
          yRadius={10} //48
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
    </section>
  );
};

export default Skills; */