import React, { useCallback, useState } from "react";
// import Img from 'gatsby-image';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";

const Title = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 2rem 0rem 1rem;
`;

const Copy = styled.p`
  color: #757575;
  margin: 0 0rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

const Item = ({ title, copy, route, image }) => {
  //console.log(image);
  const gridImage = getImage(image);
  const [hovered, setHovered] = useState("");

  const handleClick = useCallback((e) => {
    navigate(`/projects/${route}`);
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
          image={image.childImageSharp.gatsbyImageData}
          //fluid={image ? image.childImageSharp.fluid : {}}
          alt={title}
        />
        <figcaption>
          <Title>{title}</Title>
          <Copy>{copy}</Copy>
        </figcaption>
      </figure>
    </div>
  );
};

export default Item;
