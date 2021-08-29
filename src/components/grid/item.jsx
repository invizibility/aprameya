import React, { useCallback, useState } from "react";
// import Img from 'gatsby-image';
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { Link, navigate } from "gatsby";

import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";
import { Link } from "react-router-dom";
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

const StyledGridImage = styled.img`
  width: 100%;
  max-height: 275px;
`;

const Item = ({ title, copy, route, image }) => {
  //console.log(image);
  const [hovered, setHovered] = useState("");

  const handleClick = useCallback((e) => {
    //navigate(`/projects/${route}`);
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
      <Link to={`/${route}`}>
        <StyledGridImage src={image} />
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </Link>
    </div>
  );
};

export default Item;
