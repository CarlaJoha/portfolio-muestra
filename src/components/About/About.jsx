import "./About.css";
const Aboutme = () => {
  return (
    <section className="section-about" id="about">
    
        <h1 className="titulo-about">Acerca de mi:</h1>
  
      <div className="about-container">
      <div className="text-about">
        <p>
          Full Stack Developer @SoyHenry. Conocimientos y práctica en
          herramientas como Reactjs, Javascript, NodeJs, Redux, Css, HTML,
          Sequelize y otros.
        </p>
        <p>
          Magister en Psicología de la Educación (Universitat de Barcelona).
          Construcción de Ambientes Formativos, instrumentos y productos para el
          aprendizaje. Aficionada a la creación, edición de imágenes y videos.
        </p>
      </div>
      </div>
        <a href="#layout">{"<<"} Inicio {">>"}</a>
      <div className="about-iconsRedes">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/carlajoha/" title="linkedin">
              <svg></svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Aboutme;
