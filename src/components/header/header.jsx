import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
  margin-left: 100px;
  div {
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    display: flex;

    li {
      text-transform: lowercase;
      font-size: 1.2rem;

      & + li {
        margin-left: 1rem;
      }
    }
  }
`;

//const StyledLink = styled.Link``

const AnimatedNav = animated(Container);

const Header = ({ title }) => {
  const props = useSpring({
    to: { marginTop: 50, opacity: 1.0 },
    from: { marginTop: -200, opacity: 0.4 },
    delay: 200,
  });
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        minHeight: "50px",
        width: "100%",
        paddingBottom: "5vh",
      }}
    >
      <AnimatedNav style={{ ...props }}>
        <div style={{ flexDirection: "row", fontWeight: 700 }}>
          <Link
            to="/"
            style={{ fontFamily: "Fette Unz Fraktur", fontSize: 24 }}
          >
            {title}
          </Link>
        </div>
        <ul style={{ flexDirection: "row", listStyleType: "none" }}>
          {/* <li style={{ justifyContent: "flex-end", paddingLeft: "10px" }}>
            <Link to="/about">About</Link>
          </li> */}
          <li
            style={{
              justifyContent: "flex-end",
              paddingLeft: "10px",
              fontFamily: "Fann Grotesque Regular",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              contact
            </Link>
          </li>
          <li
            style={{
              justifyContent: "flex-end",
              paddingLeft: "10px",
              fontFamily: "Fann Grotesque Regular",
              textDecoration: "none",
            }}
          >
            <Link to="/cv" style={{ textDecoration: "none" }}>
              CV
            </Link>
          </li>
        </ul>
      </AnimatedNav>
    </div>
  );
};

export default Header;
