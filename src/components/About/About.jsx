import avatar from "../../assets/images/avatar.svg";

const Aboutme = () => {
  return (
    <section className="section-about" id="about">
      <div className="titulo-about">
      <h1>Acerca de mi</h1>
        <a className="volverInicio" href="#layout">
          {"<<"} Inicio {">>"}
        </a>
      </div>
      <div className="about-container">
        <div className="container-avatar">
          <img className="img-avatar"src={avatar} alt="avatar" />
        </div>
        <span className="text-about">
          <p>
            Me inicio como Full Stack Developer y soy Magister en Psicología de la Educación.{" "}
          </p>
          <p>
            Ahora, me formé con todo mi empeño y disciplina en Soy Henry
            Bootcamp, adquirí conocimientos y práctica con React, Javascript,
            NodeJs, Redux, Css, HTML, Sequelize y otros conceptos base para
            empezar y desarrollarme. Lo que sigue es aprender cada vez más y adquirir experiencia como FullStack Developer.
          </p>
          <p>
            Espero trabajar en un ambiente de trabajo positivo y respetuoso,
            donde la oportunidad de crecimiento y aprendizaje está a la vista,
            sería una estupenda forma de crecer como ser humano y como Full
            Stack Developer.
          </p>
          <p>
            Como un plus, tengo background en espacios de formación elaborando
            manuales, construcción de perfiles corporativos, instrumentos de
            control y evaluación, en diseñar e impartir talleres. Todo lo anterior
            me ayudó a desarrollar habilidades para: trabajar en equipos, para
            la creación y construcción de material y ambientes formativos.
          </p>
        </span>
      </div>
      <div className="anchor-container">
      
      <a className="anterior" href="#layout">
          {"<<"} Anterior {">>"} 
        </a>
        <a className="siguiente" href="#skills">
          {"<<"} Siguiente {">>"}
        </a>
      </div>

    </section>
  );
};

export default Aboutme;
