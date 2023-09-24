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
        <div className="background-arrows"> </div>
      </div>

      <div className="portfolio">
        <div className="flex">
          <div className="introduction">
            <span className="text">
              JACK RYBARCZYK is a mf uhhh frontend software engineer interested
              in the intersection of code and design. based in NYC, currently @
              datadog and who <span className="highlighted">place holder</span>.
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
