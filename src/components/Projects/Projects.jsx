import React from "react";
import Card from "./Card";
import { projects } from "../../data";
import "./Projects.css";

const Projects = () => {
  // console.log(projects);
  return (
    <section className="section-projects" id="projects" >
      <div className="title-projects">
        <h2>PROYECTOS</h2>
        <a href="#layout" className="link-inicio">{"<<"} Inicio {">>"}</a>
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
      <a href="#layout">{"<<"} Inicio {">>"}</a>
    </section>
  );
};

export default Projects;
