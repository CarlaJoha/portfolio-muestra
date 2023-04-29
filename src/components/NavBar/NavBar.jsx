import React from "react";
import logo from "../../assets/images/LogoAzulClaro.png";


const NavBar = () => {
  return (
    <header>
    <nav className="section-navBar">
      <div className="image-logo">
        <img className="img-logo" src={logo} alt="logo" />
      </div>
      <ul className="links-container">
        <li>
         <a href="#about">About</a>
        </li>
        <li>
         <a href="#projects">Proyectos</a>
        </li>
        <li>
         <a href="#skills">Skills</a>
        </li>
        <li>
        <a href="#contactme">Contacto</a>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default NavBar;
