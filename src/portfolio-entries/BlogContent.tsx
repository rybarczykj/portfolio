import React from "react";

// takes a string for title, and a string for technologies,
// but a ReactNode for description and images
export const BlogContent = ({
  title,
  technologies,
  description,
  images,
}: {
  title: string;
  technologies: string;
  description: React.ReactNode;
  images: React.ReactNode[];
}) => {
  return (
    <div className="blog-post">
      <div className={"title"}>
        {title} <span className={"technologies"}>{technologies}</span>
      </div>

      <div className={"description"}>{description}</div>

      <div className="blog-images">
        {images.map((image, i) => (
          <div className="blog-image" key={i}>
            {image}
          </div>
        ))}
      </div>
    </div>
  );
};
