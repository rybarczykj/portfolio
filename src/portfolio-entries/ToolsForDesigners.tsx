import React from "react";

import { BlogContent } from "./BlogContent";

export const ToolsForDesigners = () => {
  const description: React.ReactNode = (
    <>
      A tool to generate ascii art and edit it on the fly. video mode in beta.
      <div>
        {" "}
        <br />
        <br />
        <a href="https://rybarczykj.github.io/ascii/">
          rybarczykj.github.io/ascii/
        </a>{" "}
      </div>
    </>
  );

  const images: React.ReactNode[] = [
    <img height={420} src={require(`./blog-assets/fake_ad_2.gif`)} key={1} />,
    <img height={420} src={require(`./blog-assets/fake_ad_2.png`)} key={2} />,
  ];

  return (
    <div>
      <BlogContent
        title="Ascii Art Generator"
        technologies="React, Typescript"
        description={description}
        images={images}
      />
    </div>
  );
};

export default ToolsForDesigners;
