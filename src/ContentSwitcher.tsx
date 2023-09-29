import React from "react";
import "./content-switcher.less";
import asciiFrames from "./assets/shortascii.json";
import { AsciiVideo } from "./asciiVideo";
import _ from "lodash";
import fs from "fs";
import path from "path";
// import { BlogPost } from "./portfolio-entries/BlogPost";
import ToolsForDesigners from "./portfolio-entries/ToolsForDesigners";
import InteractiveSculpture from "./portfolio-entries/InteractiveSculpture";
import SelectedDesign from "./portfolio-entries/SelectedDesign";
import ComputationalTees from "./portfolio-entries/ComputationalTees";
import Dogs from "./portfolio-entries/Dogs";

// import "portfolio-entries/user-interfaces.mdx" as userInterfaces;

// union type of project names
type ProjectName =
  | "tools for designers"
  | "computational tees"
  | "dogs"
  | "interactive sculpture"
  | "selected design";

const meta: any = {
  // "user interfaces": null,

  "tools for designers": ToolsForDesigners,

  "computational tees": ComputationalTees,

  // "video processing": null,

  // index into the actual react component
  "interactive sculpture": InteractiveSculpture,

  "selected design": SelectedDesign,
  dogs: Dogs,
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
                // onMouseLeave={() => debouncedSetHoveredProject(null)}
                className={`clickable ${
                  projectName === hoveredProject ? "selected" : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() => setHoveredProject(projectName as ProjectName)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setHoveredProject(projectName as ProjectName);
                  }
                }}
              >
                {projectName}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="content">
        {hoveredProject != null && meta[hoveredProject] != null ? (
          // index into the dict of project descriptions,
          // which are markdown files
          // render the react component fromt the dict
          <div className="blog-container">
            {" "}
            {React.createElement(meta[hoveredProject])}{" "}
          </div>
        ) : (
          <AsciiVideo asciiFrames={asciiFrames} />
        )}
      </div>
    </div>
  );
};
