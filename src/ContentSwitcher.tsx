import React from "react";
import "./content-switcher.less";
import asciiFrames from "./assets/shortascii.json";
import { AsciiVideo } from "./asciiVideo";
import _ from "lodash";
import fs from "fs";
import path from "path";
import { BlogPost } from "./portfolio-entries/BlogPost";
import ToolsForDesigners from "./portfolio-entries/tools-for-designers.json";
import InteractiveSculpture from "./portfolio-entries/interactive-sculpture.json";
import VideoProcessing from "./portfolio-entries/video-processing.json";
import UserInterfaces from "./portfolio-entries/user-interfaces.json";

// import "portfolio-entries/user-interfaces.mdx" as userInterfaces;

// union type of project names
type ProjectName =
  | "user interfaces"
  | "tools for designers"
  | "video processing"
  | "interactive sculpture";

const meta: any = {
  "user interfaces": UserInterfaces,

  "tools for designers": ToolsForDesigners,

  "video processing": VideoProcessing,

  "interactive sculpture": InteractiveSculpture,
};

export const ContentSwitcher = () => {
  // on hover, show the description of the project

  // debounce the hover so that it doesn't change too quickly when the user leaves
  const [hoveredProject, setHoveredProject] =
    React.useState<ProjectName | null>(null);

  const debouncedSetHoveredProject = _.debounce(setHoveredProject, 0);

  return (
    <div className="content-switcher">
      <div className="projects">
        <ul>
          {
            // map over the members of the union type
            Object.keys(meta).map((projectName) => (
              // react component with onmouseenter
              <li
                key={projectName}
                onMouseEnter={() =>
                  debouncedSetHoveredProject(projectName as ProjectName)
                }
                onMouseLeave={
                  //debounce
                  // () => debouncedSetHoveredProject(null)
                  () => console.log("wow")
                }
              >
                {projectName}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="content">
        <div className="content-text">
          {hoveredProject != null ? (
            // index into the dict of project descriptions,
            // which are markdown files
            <div className="">
              <BlogPost meta={meta[hoveredProject]} />
            </div>
          ) : (
            <AsciiVideo asciiFrames={asciiFrames} />
          )}
        </div>
      </div>
    </div>
  );
};
