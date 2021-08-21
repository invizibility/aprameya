import React, { useCallback } from "react";
import Item from "item";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 0 4rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

const Grid = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

export default Grid;
