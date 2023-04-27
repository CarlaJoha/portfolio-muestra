import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Aboutme from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Contactme from "./components/Contactme/Contactme.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {

  return (
    <>
      <Layout />
    <div className="App">
      <Aboutme />
      <Skills/>
      <Projects />
      <Contactme />
    </div>
    </>
  );
}

export default App;
