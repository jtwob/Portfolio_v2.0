import React from "react";

const Project = (props) => {
  return (
    <div>
      <div
        className="card mb-3"
        style={{ maxWidth: 1000 + "px", marginTop: 25 + "px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-6">
            <img className="card-img" src={props.image} alt={props.altText} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title" style={{ fontSize: "large" }}>
                {props.title}
              </h4>
              <p className="card-text">{props.text}</p>
              <a href={props.repo}>Github Repo</a>

              <a href={props.live}>Live Deployed App</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
