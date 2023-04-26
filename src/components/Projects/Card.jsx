import React from "react";
import "./Projects.css";

const Card = ({ name, image, tecnologies, date, link }) => {
  return (
    <div className="container-card">
      <a href={link}>
        <article className="card">
          <img src={image} alt="img" className="image-card" />
          <div className="info-card">
            <h3>{name}</h3>
            <p>{tecnologies}</p>
            <p>{date}</p>
          </div>
        </article>
      </a>
    </div>
  );
};
export default Card;
