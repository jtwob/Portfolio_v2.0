import React from "react";

const Nav = (props) => {
  const change = function (event) {
    event.preventDefault();
    props.setpath({ path: event.target.attributes.data.value });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        James Totah
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              onClick={(event) => change(event)}
              data={"/"}
              className="btn"
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={(event) => change(event)}
              data={"/portfolio"}
              className="btn"
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
