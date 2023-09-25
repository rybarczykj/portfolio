import React from "react";

export const BlogPost = (idkWhatThisObjectIs: any) => {
  const meta = idkWhatThisObjectIs.meta;

  return (
    <div className="blog-post">
      <div className={"description"}>{meta.description} </div>
      {meta.images ? (
        <div className="blog-images">
          {meta.images.map((image: any) => (
            <div className="blog-image" key={image.url}>
              {image.isYoutube ? (
                <div className="youtube" key={image.url}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3IqtmUscE_U"
                    title="YouTube video player"
                  />
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
