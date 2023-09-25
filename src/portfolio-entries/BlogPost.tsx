import React from "react";
import "../content-switcher.less";

export const BlogPost = (idkWhatThisObjectIs: any) => {
  const meta = idkWhatThisObjectIs.meta;

  const videoWidth = 250;

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
              {image.isYoutube ? (
                <div className="youtube" key={image.url}>
                  <div
                    style={{
                      width: videoWidth,
                      height: videoWidth,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      width={videoWidth * 1.2}
                      height={videoWidth * 2.3}
                      style={{
                        position: "relative",
                        left: `-${videoWidth / 10}px`,
                        top: `-${videoWidth / 1.5}px`,
                      }}
                      src={`https://www.youtube.com/embed/${image.url}?autoplay=1&controls=0&showinfo=0&modestbranding=1&mute=1&playlist=${image.url}&loop=1`}
                      title="arduino sculpture 1"
                      allow="controls; showinfo; modestbranding; autoplay; loop; playlist"
                    />
                  </div>
                </div>
              ) : (
                <img key={image.url} src={image.url} />
              )}{" "}
            </div>
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
};
