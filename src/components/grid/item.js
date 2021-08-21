import React, { useCallback, useState } from "react";
// import Img from 'gatsby-image';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const Item = ({ title, copy, image }) => {
  const [hovered, setHovered] = useState("");

  const handleClick = useCallback((e) => {
    navigate("/projects");
    console.log(`clicked ${title}`);
  }, []);

  return (
    <div
      role="button"
      onClick={handleClick}
      onKeyDown={handleClick}
      onMouseOver={() => {
        setHovered(title);
      }}
      onFocus={() => {
        console.log("yeet");
      }}
      tabIndex={0}
    >
      <figure>
        <GatsbyImage
          fluid={image ? image.childImageSharp.fluid : {}}
          alt={title}
        />
        <figcaption>yo</figcaption>
      </figure>
    </div>
  );
};
