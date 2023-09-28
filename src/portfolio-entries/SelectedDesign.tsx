import React from "react";

import { BlogContent } from "./BlogContent";

export const SelectedDesign = () => {
  const description: React.ReactNode = (
    <>
      <div>just some posters</div>
    </>
  );

  const images: React.ReactNode[] = [
    <img
      height={350}
      src={require(`./blog-assets/white-poster.png`)}
      key={2}
    />,
    <img height={350} src={require(`./blog-assets/redd-poster.png`)} key={1} />,

    // <img
    //   height={250}
    //   src={require(`./blog-assets/gromit-poster.png`)}
    //   key={2}
    // />,
  ];

  return (
    <BlogContent
      title="Poster design"
      technologies="p5.js, Adobe Illustrator"
      description={description}
      images={images}
    />
  );
};

export default SelectedDesign;
