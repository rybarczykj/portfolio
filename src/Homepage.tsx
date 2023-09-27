import React from "react";

import { AsciiVideo } from "./asciiVideo";
import { StrictMode } from "react";

import "./homepage.less";
import Canvas from "./Canvas";
import { ContentSwitcher } from "./ContentSwitcher";

export const Homepage = () => {
  return (
    <>
      <div className="background-rect">
        {" "}
        <div className="background-arrows"></div>
      </div>

      <div className="portfolio">
        <div className="flex">
          <div className="introduction">
            <span className="text">
              JACK RYBARCZYK is uhhhh frontend software engineer/graphic
              designer <span className="highlighted">based </span>in NYC who
              currently works @datadog. a yep and this is{" "}
              <span className="highlighted">his website</span>
            </span>
          </div>

          <ContentSwitcher />
        </div>
        {/* <Canvas /> */}
      </div>
    </>
  );
};

export default Homepage;
