import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Intro = ({ data }) => {
  const props = useSpring({
    to: { opacity: 1.0 },
    from: { opacity: 0.4 },
    delay: 200,
  });
  return (
    <animated.div
      style={{
        ...props,
        marginLeft: "100px",
        display: "block",
        float: "left",
        marginTop: "50px",
      }}
      dangerouslySetInnerHTML={{ __html: data.html }}
    ></animated.div>
  );
};

export default Intro;
