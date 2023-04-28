import React from "react";
import Card from "./Card";
import { projects } from "../../data";

const Projects = () => {
  // console.log(projects);
  return (
    <section className="section-projects" id="projects" >
      <div className="title-projects">
        <h2>PROYECTOS</h2>
        <div>
      <a className="volverInicio" href="#layout">
        {"<<"} Inicio {">>"}
      </a>
      </div>
      </div>
      <div className="container-projects">
      {projects.map((project, index) => {
        return (
          <Card
            id={project.id}
            key={index}
            image={project.image}
            name={project.name}
            tecnologies={project.tecnologies}
            link={project.link}
          />
        );
      })}
      </div>
      <div className="anchor-container">
      <a className="anterior" href="#skills">
          {"<<"} Anterior {">>"} 
        </a>
        <a className="siguiente" href="#contactme">
          {"<<"} Siguiente {">>"}
        </a>
      </div>
    </section>
  );
};

export default Projects;
