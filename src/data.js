import img  from './assets/iconImagen.png'
import imgFormulario1 from "./assets/proyectosImg/FormularioCitas2.png"
import imgCalculadora from "./assets/proyectosImg/calculadora.png"
import imgTestimonios from "./assets/proyectosImg/Testimonios.png"
import imgContador from "./assets/proyectosImg/contador.png"
export const projects = [
  {
    id:1,
    name: "Rick and Morty",
    description: "Proyecto 1",
    tecnologies: "Javascript, React, Redux, HTML, CSS",
    image: img,
    link: "Link del dominio",
    date: 2023,
  },
  {
    id:2,
    name: "Formulario para citas",
    description: "Formulario realizado con React-Vite, con diferentes campos controlados a llenar, muestra del uso de localStorage para almacenar las citas creadas con la posibilidad de eliminarlas",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgFormulario1,
    link: "https://formulariocitas-jdt-carlajoha.netlify.app/",
    date: 2023,
  },
  {
    id:3,
    name: "Calculadora",
    description: "Calculadora Sencilla",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgCalculadora,
    link: " https://calculadora-react-vite.netlify.app",
    date: 2023,
  },
  {
    id:4,
    name: "Sección de Testimonio",
    description: "Muestra de sección de testimonios responsive",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgTestimonios,
    link: "https://carlajoha-testimonios-react.netlify.app",
    date: 2023,
  },
  {
    id:5,
    name: "Contador",
    description: "Proyecto contador que aumenta y disminuye",
    tecnologies: "Javascript, React, HTML, CSS",
    image: imgContador,
    link: "https://carlajoha-contador.netlify.app",
    date: 2023,
  },
];
