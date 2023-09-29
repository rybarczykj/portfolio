import React from "react";

import { BlogContent } from "./BlogContent";

export const Dogs = () => {
  const description: React.ReactNode = (
    <>
      <div>you wouldn{"'"}t download a dog</div>
    </>
  );

  const images: React.ReactNode[] = [
    <img
      className={"nozoom small square"}
      src={require(`./blog-assets/dogs-01.png`)}
      key={1}
    />,
    <img
      className={"nozoom small square"}
      src={require(`./blog-assets/dogs-02.png`)}
      key={1}
    />,

    <img
      className={"nozoom small square"}
      src={require(`./blog-assets/dogs-03.png`)}
      key={1}
    />,
  ];

  return (
    <BlogContent
      title="Dog graphics"
      technologies="ascii"
      description={description}
      images={images}
    />
  );
};

export default Dogs;
