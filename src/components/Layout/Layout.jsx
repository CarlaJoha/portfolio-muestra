import React from "react";
import NavBar from "../NavBar/NavBar";
import videoLayout from "../../assets/images/humo.mp4";

const Layout = () => {
  return (
    <main>
      <section className="section-layout" id="layout">
        <NavBar />
        <div>
          <video src={videoLayout} type="mp4" autoPlay loop muted />
        </div>
        <div className="text-layout">
          <h1 className="h1">CARLA JOHANNA AULAR</h1>
          <h2 className="h2">Full Stack Developer</h2>
        </div>
      </section>
    </main>
  );
};

export default Layout;
