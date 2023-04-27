import "./Skills.css";
const Skills = () =>{
    return (
        <section className="section-skills" id="skills">
          <div className="titulo-skills">
          <h1>Skills</h1>
            <a className="volverInicio" href="#layout">
              {"<<"} Inicio {">>"}
            </a>
          </div>
          <div className="skills-container">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium perspiciatis quaerat nam aperiam eligendi eius distinctio impedit natus ea, ex nemo, eum quae inventore placeat molestias nostrum recusandae tempora!</p>
          </div>
          <div className="anchor-container">
          <a className="anterior" href="#about">
              {"<<"} Anterior {">>"} 
            </a>
            <a className="siguiente" href="#projects">
              {"<<"} Siguiente {">>"}
            </a>
          </div>
        </section>
      );
    };

export default Skills;