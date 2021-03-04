import React from "react";

const Nav = (props) => {
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
            <a className="nav-link" href="/Portfolio_v2.0/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Portfolio_v2.0/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="./assets/James_Totah_Resume.pdf"
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;