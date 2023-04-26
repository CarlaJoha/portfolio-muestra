import "./About.css";
const Aboutme = () => {
  return (
    <section className="section-about" id="about">
      <h1 className="titulo-about">Acerca de mi:</h1>

      <div className="about-container">
        <div className="text-about">
          <p>
            Hola, Yo soy Carla Johanna Aular. Me inicio como Full Stack
            Developer y soy Magister en Psicología de la Educación.{" "}
          </p>

          <p>
            Ahora, me formé con todo mi empeño y disciplina en Soy Henry
            Bootcamp, adquirí conocimientos práctica con React, Javascript,
            NodeJs, Redux, Css, HTML, Sequelize y otros conceptos base para
            empezar y desarrollarme en este ámbito. Lo que sigue es aprender
            cada vez más y adquirir experiencia como FullStack Developer.
          </p>
          <p>
            Espero trabajar en un ambiente de trabajo positivo y respetuoso,
            donde la oportunidad de crecimiento y aprendizaje está a la vista,
            sería una estupenda forma de crecer como ser humano y como Full
            Stack Developer.
          </p>
          <p>
            Tengo background en espacios de formación elaborando manuales,
            construcción de perfiles corporativos, instrumentos de control y
            evaluación, diseñar e impartir talleres. Todo lo
            anterior me ayudó a desarrollar habilidades para: trabajar en
            equipos, para la creación y construcción de material y ambientes
            formativos.
          </p>
        </div>
      </div>
      <div>
      <a className="volverInicio" href="#layout">
        {"<<"} Inicio {">>"}
      </a>
      </div>
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
