import p5 from "p5";
import React, { useEffect, useRef } from "react";
import "./homepage.less";

// p5js boiler

// number of circles
const width = 200;
const height = 5;
const padding = 20;

// maximum and minimum radius of the circles
const maxRadius = 10;
const minRadius = 2;

const canvasHeight = 100;
const canvasWidth = 800;

export const Canvas = () => {
  let processingRef = useRef(null);
  const radii: number[][] = [];

  // array of booleans, true if the circle is growing, false if it is shrinking
  let isGrowing: boolean[][] = [];

  const Sketch = (p: any) => {
    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight);

      for (let x = 0; x < width; x++) {
        radii[x] = [];
        for (let y = 0; y < height; y++) {
          // radius[x][y] = Math.floor((x + y) * minRadius / maxRadius);
          // radius[x][y] = Math.floor((x + y - (2 * minRadius)) * (maxRadius - minRadius) / (2 * height) + minRadius);

          // random radius
          radii[x][y] = Math.floor(
            Math.random() * (maxRadius - minRadius) + minRadius
          );
        }
      }
      for (let x = 0; x < width; x++) {
        isGrowing[x] = [];
        for (let y = 0; y < height; y++) {
          isGrowing[x][y] = true;
        }
      }

      p.frameRate(2);
    };

    p.draw = () => {
      p.background(255, 255, 255);

      p.fill(102, 102, 102);
      p.noStroke();

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          if (radii[x][y] >= maxRadius) {
            isGrowing[x][y] = false;
          }

          if (radii[x][y] <= minRadius) {
            isGrowing[x][y] = true;
          }

          // if the radius is less than 100, grow
          if (isGrowing[x][y]) {
            radii[x][y] += 1;
          } else {
            radii[x][y] -= 1;
          }
        }
      }

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          // center in the page depndeding on the number of circles

          const xpos = (canvasWidth - width * padding) / 2 + x * padding;
          const ypos = (canvasHeight - height * padding) / 2 + y * padding;
          //   p.text(radii[x][y], xpos, ypos);
          p.fill(102, 102, 102, 200 * (radii[x][y] / maxRadius));

          //50% random chance of drawing nothin

          if (Math.random() > 0.7) {
            // p.circle(xpos, ypos, radii[x][y]);
            p.square(xpos, ypos, maxRadius);
          }
        }
      }
    };
  };

  useEffect(() => {
    //ignore the error
    // @ts-ignore
    new p5(Sketch, processingRef.current);

    return () => {};
  }, []);

  return <div ref={processingRef} className="p5" />;
};

export default Canvas;
