import React from "react";

const Project = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card my-1">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.url} className="btn btn-primary">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
