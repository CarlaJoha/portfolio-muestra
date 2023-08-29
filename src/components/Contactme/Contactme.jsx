import imgGithub from "../../assets/images/github.png";
import imgLinkedin from "../../assets/images/linkedin.png";
import imgWhatsapp from "../../assets/images/whatsapp.png";
import React, { useEffect, useRef, useState } from "react";
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} from "../../env"

const Contactme = () => {

  
  return (
    <section className="section-contactme" id="contactme">
      <div className="contact-title">
      <h1 >Contáctame:</h1>
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
              href="https://wa.me/xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              alt="GitHub"
            >
              <img className="img-whatsapp" src={imgWhatsapp} alt="whatsapp" />
            </a>
          </div>
          <div>
            <a
              className="downloadCv"
              href="/xxxxxxxxxxx"
              type="pdf"
              download
            >
              Descargar CV
            </a>
          </div>
        </div>
        <div className="form-container">
        {error ? ( <p className="alerta-error">Por favor, llena todos los campos</p> ) : null}
        <form
          className="form"
          name="form"
          ref={form}
          onSubmit={handleSendEmail}
        >
          <div>
            <label className="label-contactme" htmlFor="contact-name">
              Nombre completo:{" "}
            </label>
            <br />
            <input
              className="input-name"
              type="text"
              id="input-name"
              placeholder="Nombre y Apellido"
              name="from_name"
              onChange={actualizarFormulario}
              value={from_name}
            />
          </div>
          <div>
            <label className="label-contactme" htmlFor="contact-email">
              Tu correo electrónico:{" "}
            </label>
            <br />
            <input
              className="input-email"
              type="email"
              id="input-email"
              placeholder="your.email@email.com"
              name="from_email"
              onChange={actualizarFormulario}
              value={from_email}
            />
          </div>
          <div>
            <label className="label-contactme" htmlFor="contact-message">
              Mensaje:{" "}
            </label>
            <br />
            <textarea
              className="input-mensaje"
              type="text"
              id="input-mensaje"
              placeholder="Envíame un mensaje..."
              name="message"
              onChange={actualizarFormulario}
              value={message}
            />
          </div>
          <input
            className="btn-form"
            type="submit"
            value="Send"
            id="input-submit"
          />
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
