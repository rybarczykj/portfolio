import React from "react";
import "./content-switcher.less";
import asciiFrames from "./assets/shortascii.json";
import { AsciiVideo } from "./asciiVideo";
import _ from "lodash";

// union type of project names
type ProjectName =
  | "user interfaces"
  | "tools for designers"
  | "video processing"
  | "interactive sculpture";

// dict of project names to project descriptions
const ProjectDescriptions: Record<ProjectName, string> = {
  "user interfaces":
    "I like to build user interfaces that are simple, intuitive, and beautiful. I'm particularly interested in the intersection of code and design.",
  "tools for designers":
    "I like to build tools for designers that are simple, intuitive, and beautiful. I'm particularly interested in the intersection of code and design.",
  "video processing":
    "I like to build video processing tools that are simple, intuitive, and beautiful. I'm particularly interested in the intersection of code and design.",
  "interactive sculpture":
    "I like to build interactive sculptures that are simple, intuitive, and beautiful. I'm particularly interested in the intersection of code and design.",
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
          {Object.keys(ProjectDescriptions).map((projectName) => (
            // react component with onmouseenter
            <li
              key={projectName}
              onMouseEnter={() =>
                debouncedSetHoveredProject(projectName as ProjectName)
              }
              onMouseLeave={
                //debounce
                () => debouncedSetHoveredProject(null)
              }
            >
              {projectName}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="content-text">
          {hoveredProject != null ? (
            <div className="project-description">
              {ProjectDescriptions[hoveredProject as ProjectName]}
            </div>
          ) : asciiFrames != null ? (
            <AsciiVideo asciiFrames={asciiFrames} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
