import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const HeaderInfo = ({ content }) => {
  const props = useSpring({
    to: { opacity: 1.0 },
    from: { opacity: 0.2 },
    delay: 200,
  });
  return (
    <animated.div
      style={{
        ...props,
        display: "block",
        float: "left",
        lineHeight: "200%",
      }}
    >
      {content}
    </animated.div>
  );
};

export default HeaderInfo;
