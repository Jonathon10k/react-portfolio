import React from "react";
import Project from "./Project";
import projectData from "./data";

const Projects = () => {
  // Generate an array of Project components containing props passed from 'data' array
  const projects = projectData.map((item) => (
    <Project title={item.title} desc={item.desc} imgSrc={item.imgSrc} />
  ));
  console.log(projects[0]);
  return (
    <>
      <h1>My Projects</h1>
      <div className="row project-row">{projects}</div>
    </>
  );
};

export default Projects;
