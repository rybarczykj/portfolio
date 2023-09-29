import React from "react";
import { BlogContent } from "./BlogContent";

export const InteractiveSculpture = () => {
  const videHeight = 300;

  const videoWidth = 200;

  const description = (
    <>
      Using bodies as controllers, I created a series of sculptures that respond
      to proximity of their observers.
    </>
  );

  const link =
    "https://www.youtube.com/watch?v=6a1oaH573dY&list=PLZeTy8TIwguGbXbmBebhnmyQDMBwzvWZL&index=1";

  const images: React.ReactNode[] = [
    <img
      height={400}
      src={require(`./blog-assets/arduino-sculpture-5.gif`)}
      key={1}
    />,
    <img
      height={400}
      src={require(`./blog-assets/arduino-sculpture-3.gif`)}
      key={1}
    />,
  ];

  return (
    <BlogContent
      title="Interactive Sculpture"
      technologies="Arduino, C++"
      description={description}
      images={images}
      link={link}
    />
  );
};

export default InteractiveSculpture;
