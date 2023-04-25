import React from "react";
import './Projects.css';


const Card = ({name, image, tecnologies, date, link}) => {

  return (
    <div className="container-card">
      <article className="card">
        <img src={image} alt="img" className="image-card" />
        <div className="info-card">
          <h3>{name}</h3>
          <p>{tecnologies}</p>
          <a href={link}>Ver</a>
          <p>{date}</p>

        </div>
      </article>
    </div>
  );
};
export default Card;