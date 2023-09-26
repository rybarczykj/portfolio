import React from "react";
import "../content-switcher.less";

// import logo from "./blog-assets/arduino-sculpture-1.gif";

// TODO: This component is really ugly and hacky
const VideoRender = ({ image }: { image: any }) => {
  const videoWidth = 250;
  return image.isHorizontal ? (
    <div
      style={{
        width: videoWidth,
        height: videoWidth,
        overflow: "hidden",
      }}
    >
      {" "}
      <iframe
        width={videoWidth * 2}
        height={videoWidth * 2}
        style={{
          position: "relative",
          left: `-${videoWidth / 2}px`,
          top: `-${140}px`,
        }}
        src={`https://www.youtube.com/embed/${image.url}?&controls=0&showinfo=0&modestbranding=1&mute=1&playlist=${image.url}&loop=1`}
        title="arduino sculpture 1"
        allow="controls; showinfo; modestbranding; autoplay; loop; playlist"
      />
    </div>
  ) : (
    <div
      style={{
        width: videoWidth,
        height: videoWidth * 1.4,
        overflow: "hidden",
      }}
    >
      {" "}
      <iframe
        width={videoWidth * 1.2}
        height={videoWidth * 2.3}
        style={{
          position: "relative",
          left: `-${videoWidth / 10}px`,
          top: `-${50}px`,
        }}
        src={`https://www.youtube.com/embed/${image.url}?&controls=0&showinfo=0&modestbranding=1&mute=1&playlist=${image.url}&loop=1`}
        title="arduino sculpture 1"
        allow="controls; showinfo; modestbranding; autoplay; loop; playlist"
      />
    </div>
  );
};
export const BlogPost = (idkWhatThisObjectIs: any) => {
  const meta = idkWhatThisObjectIs.meta;

  // log the current directory

  return (
    <div className="blog-post">
      <div className={"title"}>
        {/* {meta.title}{" "} */}
        {meta.technologies ? (
          <span className={"technologies"}>{`${meta.technologies}`} </span>
        ) : null}
      </div>

      <div className={"description"}>{meta.description} </div>
      {meta.images ? (
        <div className="blog-images">
          {meta.images.map((image: any) => (
            <div className="blog-image" key={image.url}>
              {image.isYoutube ? <VideoRender image={image} /> : null}
              {image.isGif && (
                <div className="youtube" key={image.url}>
                  <img
                    src={require(`./blog-assets/${image.url}`)}
                    width={250}
                  />
                </div>
              )}{" "}
              {image.isPhoto && <img key={image.url} src={image.url} />}
            </div>
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
};
