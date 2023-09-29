import React from "react";

// takes a string for title, and a string for technologies,
// but a ReactNode for description and images
export const BlogContent = ({
  title,
  technologies,
  description,
  images,
  imageURLs,
  link,
}: {
  title: string;
  technologies: string;
  description: React.ReactNode;
  images?: React.ReactNode[];
  imageURLs?: string[];
  link?: string;
}) => {
  return (
    <div className="blog-post">
      <div className="content-text">
        <div className={"title"}>
          {title} {""} <span className={"technologies"}>{technologies}</span>
          {link && (
            <div className={"link"}>
              <a href={link}>
                {
                  //only show the first 30 characters of the link
                  link.slice(0, 45) + (link.length > 45 ? "..." : "")
                }
              </a>
            </div>
          )}
        </div>

        <div className={"description"}>{description}</div>
      </div>
      <div className="blog-images">
        {images &&
          images.map((image, i) => (
            <div className="blog-image" key={i}>
              {image}
            </div>
          ))}
        {imageURLs &&
          imageURLs.map((url, i) => <img src={`require(${url})`} key={i} />)}
      </div>
    </div>
  );
};
