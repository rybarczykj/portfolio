import React from "react";

import { BlogContent } from "./BlogContent";

export const ToolsForDesigners = () => {
  const description: React.ReactNode = (
    <>
      <div>
        <a href="https://rybarczykj.github.io/ascii/">
          https://rybarczykj.github.io/ascii/
        </a>{" "}
      </div>
      A React app to generate ascii art from an image with instant feedback on
      various parameters. Used for personal projects. Support for video was
      added later.
    </>
  );

  const images: React.ReactNode[] = [
    // <img src="." key={0} />,
    // <img src="." key={1} />,
  ];

  return (
    <BlogContent
      title="Ascii Art Tool"
      technologies="React"
      description={description}
      images={images}
    />
  );
};

export default ToolsForDesigners;
