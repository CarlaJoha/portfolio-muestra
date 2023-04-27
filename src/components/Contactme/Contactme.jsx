import "./Contactme.css";
import imgGithub from "../../assets/images/github.png";
import imgLinkedin from "../../assets/images/linkedin.png";
import imgWhatsapp from "../../assets/images/whatsapp.png";
// import emails from "emailjs";

const Contactme = () => {
  const enviarEmail = (event) => {
    event.preventDefault();
    // emails.sendForm
    console.log("email enviado correctamente");
  };

  return (
    <section className="section-contactme" id="contactme">
    <h1 className="contact-title">Contáctame:</h1>
      <div>
      <a className="volverInicio" href="#layout">
        {"<<"} Inicio {">>"}
      </a>
      </div>
      <div className="container-contactme">
      <div className="container-izq">
      <div>
        <a
          href="https://www.linkedin.com/in/carlajoha/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img className="img-linkedin" src={imgLinkedin} alt="linkedin" /> 
        </a>
      </div>
      <div>
        <a
          href="https://github.com/CarlaJoha"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img className="img-github" src={imgGithub} alt="gitHub" /> 
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/584142030597"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub"
        >
         <img className="img-whatsapp" src={imgWhatsapp} alt="whatsapp" /> 
        </a>
      </div>
      <div>
        <a className="downloadCv" href="/CV CarlaJoha2023.pdf" type="pdf" download >
          Descargar CV
        </a>
      </div>
      </div>
      <form className="form" name="form" onSubmit={enviarEmail}>
        <div>
          <label className="label" htmlFor="contact-name">
            Nombre completo:{" "}
          </label><br/>
          <input
            className="input-name"
            type="text"
            id="input-name"
            placeholder="Nombre y Apellido"
            name="contact-name"
          />
        </div>
        <div>
          <label className="label" htmlFor="contact-name">
            Tu correo electrónico:{" "}
          </label><br/>
          <input
            className="input-email"
            type="email"
            id="input-email"
            placeholder="your.email@email.com"
            name="contact-email"
          />
        </div>
        <div>
          <label className="label" htmlFor="">
            Mensaje:{" "}
          </label><br/>
          <textarea
            className="input-mensaje"
            type="text"
            id="input-mensaje"
            placeholder="Envíame un mensaje..."
          />
        </div>
        <button
          className="btn-form"
          type="submit"
          value="Submit"
          id="input-submit"
        >
          Enviar
        </button>
      </form>
      </div>
    </section>
  );
};

export default Contactme;
