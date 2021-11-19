import React, { useCallback } from "react";
import Item from "./item";
import styled from "styled-components";
import MEDIA from "../../helpers/mediaTemplates";
import PROJECTS from "../../../content/projects/projects.json";
import Project from "../project/project";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1vw;
  margin: 1rem 0;
  overflow: hidden;
  ${MEDIA.TABLET`
    display: block;
  `};
`;

const Grid = ({ items }) => (
  <div>
    <Container>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Container>
  </div>
);

export default Grid;
