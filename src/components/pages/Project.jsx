import React from "react";
import "../../App.css";

const Project = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card proj-card my-1">
        <div className="card-body" style={{backgroundImage: `${props.imgSrc}`}}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.liveURL} className="btn btn-primary mx-1">
            Live
          </a>
          <a href={props.gitURL} className="btn btn-dark mx-1">
            Repo
          </a>
         </div>
      </div>
    </div>
  );
};

export default Project;
