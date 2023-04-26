import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/LogoAzulClaro.png";


const NavBar = () => {
  return (
    <header>
    <nav className="section-navBar">
      <div className="image-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="links-container">
        <li>
         <a href="#projects">Proyectos</a>
        </li>
        <li>
         <a href="#about">About</a>
        </li>
        {/* <li>
         <a href="#experience">Experiencia</a>
        </li> */}
        <li>
        <a href="#contactme">Contacto</a>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default NavBar;
