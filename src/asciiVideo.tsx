import React from "react";
import "./homepage.less";

export const AsciiVideo = ({
  asciiFrames,
  frameRate = 6,
}: {
  asciiFrames: string[];
  // the frame rate to play the video at (has nothing to do with video creation)
  frameRate?: number;
}): JSX.Element | null => {
  const [currentFrameIndex, setCurrentFrameIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % asciiFrames.length);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [asciiFrames.length, frameRate]);

  // shift left and right 5 pixels every 6 frames

  return (
    <pre>
      <div className="ascii">{asciiFrames[currentFrameIndex]}</div>{" "}
    </pre>
  );
};
