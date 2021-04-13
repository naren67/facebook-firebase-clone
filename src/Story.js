import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ bgImage, proImage, text }) {
  return (
    <div
      className="story"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Avatar className="story__avatar" src={proImage} />
      <p
        style={{
          color: `white`,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Story;
