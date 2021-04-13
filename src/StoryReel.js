import React from "react";
import "./StoryReel.css";
import Story from "./Story.js";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        bgImage="http://placeimg.com/640/360/any"
        proImage=""
        text="naren"
      />

      <Story
        bgImage="http://placeimg.com/640/360/any"
        proImage=""
        text="david"
      />

      <Story
        bgImage="http://placeimg.com/640/360/any"
        proImage=""
        text="snow"
      />

      <Story
        bgImage="http://placeimg.com/640/360/any"
        proImage=""
        text="bella"
      />

      <Story
        bgImage="http://placeimg.com/640/360/any"
        proImage=""
        text="karal"
      />
    </div>
  );
}

export default StoryReel;
