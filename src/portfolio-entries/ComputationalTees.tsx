import React from "react";

import { BlogContent } from "./BlogContent";

export const ComputationalTees = () => {
  const description: React.ReactNode = (
    <>
      Created various computational media works, including t-shirts whose
      designs were suggested by a grammar.
      <br />
      <br />
    </>
  );

  const images: React.ReactNode[] = [
    <img src={require(`./blog-assets/tees.png`)} key={1} />,
    <img src={require(`./blog-assets/book.jpg`)} key={2} />,
  ];

  return (
    <div>
      <BlogContent
        title="Computational Media"
        technologies="HTML, CSS, Python"
        link="https://www.jackrybarczyk.com/cs318/318.html"
        description={description}
        images={images}
      />
    </div>
  );
};

export default ComputationalTees;
