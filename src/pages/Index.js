import React from "react";

const index = (props) => {
  return (
    <div className="container" style={{ ...props.style }}>
      <div className="row">
        <div className="col-md-9">
          <h1 id="title">About Me</h1>
          <hr />
          <img
            className="wrap-text"
            style={{ width: 200 + "px" }}
            src={props.image}
            alt={props.altText}
          />
          <p>{props.text}</p>
        </div>
      </div>
      <div className="card" style={{ width: 30 + "rem", border: "none" }}>
        <div className="card-body">
          <div className="card-title">Contact Information</div>
          <div className="card-subtitle mb-2 text-muted">+ relevant links</div>
          <hr />
          <p className="card-text">{props.name}</p>
          <p className="card-text">Email: {props.email}</p>
          <p className="card-text">Cell: {props.cell}</p>
          <a className="card-link" href={props.linkedIn}>
            LinkedIn Profile
          </a>
          <a href={props.github} className="card-link">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
