import React from "react";
import Project from "./Project";
import projectData from "./assets/data/data";

const ProjectsGallery = () => {
  // Generate an array of Project components containing props passed from 'data' array
  const projects = projectData.map((item) => (
    <Project title={item.title} desc={item.desc} imgSrc={item.imgSrc} gitURL={item.gitURL} liveURL={item.liveURL} />
  ));
  
  console.log(projects[0]);
  return (
    <>
      <h1 className="gallery-title">My Projects</h1>
      <div className="row project-row">{projects}</div>
    </>
  );
};

export default ProjectsGallery;
