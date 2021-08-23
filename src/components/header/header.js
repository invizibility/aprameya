import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    display: flex;
    padding-right: 5%;

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
      <div style={{ flexDirection: "row", fontWeight: 700 }}>{title}</div>
      <ul style={{ flexDirection: "row", listStyleType: "none" }}>
        <li style={{ justifyContent: "flex-end", paddingLeft: "10px" }}>
          about
        </li>
        <li style={{ justifyContent: "flex-end", paddingLeft: "10px" }}>
          contact
        </li>
        <li style={{ justifyContent: "flex-end", paddingLeft: "10px" }}>cv</li>
      </ul>
    </AnimatedNav>
  );
};

export default Header;
