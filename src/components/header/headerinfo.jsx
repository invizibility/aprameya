import React, { useState, useEffect } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import { styled, keyframes } from "styled-components";

function Mount({ toMount }) {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    //config: config.molasses,
    //reverse: show,
    delay: 1150,
    // onRest: () => set(!show),
  });

  useEffect(() => {
    set(true);
    console.log("hello");
    return () => {
      console.log("bye");
      set(false);
    };
  }, []);

  return transitions(
    (styles, item) =>
      item && <animated.div style={styles}>{toMount}</animated.div>
  );
}

const HeaderInfo = ({ content }) => {
  return (
    <Mount
      toMount={
        <div
          style={{
            display: "block",
            float: "left",
            lineHeight: "200%",
          }}
        >
          {content}
        </div>
      }
    />
  );
};

export default HeaderInfo;
