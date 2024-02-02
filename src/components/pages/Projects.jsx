import React from "react";
import Project from "./Project";
import data from "./data.js";

const Projects = (props) => {
  // Map over data array and return interpolated components
  const projects = data.map((item) => (
    <Project title={item.title} desc={item.desc} />
  ));

  return (
      <>
          <h1>My Projects</h1>
      <div className="row">{projects}</div>
    </>
  );
};

export default Projects;
