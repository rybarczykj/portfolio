import React from "react";

import { AsciiVideo } from "./asciiVideo";
import { StrictMode } from "react";

import myData from "./assets/shortascii.json";

import "./homepage.less";
import Canvas from "./Canvas";

export const Homepage = () => {
  const data: string[] = myData;

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

          <div className="content-switcher">
            <div className="projects">
              <ul>
                <li>user interfaces</li>
                <li>tools for designers</li>
                <li>video processing</li>
                <li>interactive sculpture</li>
              </ul>
            </div>
            {data != null ? <AsciiVideo asciiFrames={data} /> : null}
          </div>
        </div>
        {/* <Canvas /> */}
      </div>
    </>
  );
};

export default Homepage;
