import "./App.css";
// import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout.jsx";
import Aboutme from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Contactme from "./components/Contactme/Contactme.jsx";

function App() {
  //   const [projects, setProjects] = useState([]);
  // console.log(projects);
  //   useEffect(() => {
  //     setProjects(projects);
  //   }, [projects]);

  return (
    <>
      <Layout />
      <Aboutme />
      <Projects />
      <Contactme />
    </>
  );
}

export default App;
