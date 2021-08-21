import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  ul {
    list-style: none;
    padding: 0;
    padding-right: 150px;

    li {
      text-transform: lowercase;
      font-size: 1.2rem;

      & + li {
        margin-left: 1rem;
      }
    }
  }
`;

const AnimatedNav = animated(Container);

const Header = ({ title }) => {
  const props = useSpring({
    to: { marginTop: 50, opacity: 1.0 },
    from: { marginTop: -200, opacity: 0.4 },
    delay: 200,
  });
  return (
    <AnimatedNav style={{ ...props, marginLeft: "100px" }}>
      <ul style={{ listStyleType: "none" }}>
        <li style={{ float: "left", fontWeight: 700 }}>{title}</li>
        <li style={{ float: "right", paddingLeft: "10px" }}>about</li>
        <li style={{ float: "right", paddingLeft: "10px" }}>contact</li>
        <li style={{ float: "right", paddingLeft: "10px" }}>cv</li>
      </ul>
    </AnimatedNav>
  );
};

export default Header;
