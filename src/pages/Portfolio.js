import React from "react";
import Project from "../Components/Project/Project";

const portfolio = (props) => {
  return (
    <div>
      {props.projects.map(({ image, altText, title, text, repo, live }) => (
        <Project
          image={image}
          altText={altText}
          title={title}
          text={text}
          repo={repo}
          live={live}
        />
      ))}
    </div>
  );
};

export default portfolio;
