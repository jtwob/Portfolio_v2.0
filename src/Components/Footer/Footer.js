import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        marginTop: 25 + "px",
        backgroundColor: "white",
        padding: 10 + "px",
      }}
    >
      <div className="container">
        <span className="text-muted">&copy; James Totah 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
