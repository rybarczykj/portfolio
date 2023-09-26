import React from "react";
import { BlogContent } from "./BlogContent";

export const InteractiveSculpture = () => {
  const videHeight = 300;

  const videoWidth = 200;

  const description = (
    <>
      responds to user input. proximity to sculpture corresponds to speed of
      movement.
    </>
  );

  const images = [
    <iframe
      key={0}
      width={videoWidth}
      height={videHeight}
      src={`https://www.youtube.com/embed/WjkXq7ehdXI?&controls=0&showinfo=0&modestbranding=1&mute=1&playlist=WjkXq7ehdXI&loop=1`}
      title="arduino sculpture 1"
      allow="controls; showinfo; modestbranding; autoplay; loop; playlist"
    />,

    <iframe
      key={1}
      width={videHeight}
      height={videoWidth}
      src={`https://www.youtube.com/embed/14KaRNbutEo?&controls=0&showinfo=0&modestbranding=1&mute=1&playlist=14KaRNbutEo&loop=1`}
      title="arduino sculpture 1"
      allow="controls; showinfo; modestbranding; autoplay; loop; playlist"
    />,
  ];

  return (
    <BlogContent
      title="Interactive Sculpture"
      technologies="Arduino, C++"
      description={description}
      images={images}
    />
  );
};

export default InteractiveSculpture;
