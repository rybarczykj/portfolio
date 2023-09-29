import React from "react";

import { BlogContent } from "./BlogContent";

export const ToolsForDesigners = () => {
  const description: React.ReactNode = (
    <>
      A tool to generate ascii art and edit it on the fly. video mode in beta.
    </>
  );

  const images: React.ReactNode[] = [
    <img
      className={"nozoom"}
      src={require(`./blog-assets/fake_ad_2.gif`)}
      key={1}
    />,
    <img
      className={"nozoom small"}
      src={require(`./blog-assets/fake_ad_1.png`)}
      key={2}
    />,
  ];

  return (
    <div>
      <BlogContent
        title="Ascii Art Generator"
        technologies="React, Typescript"
        description={description}
        images={images}
        link="https://rybarczykj.github.io/ascii/"
      />
    </div>
  );
};

export default ToolsForDesigners;
