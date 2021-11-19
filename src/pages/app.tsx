import * as React from "react";
// import { graphql } from "gatsby";
import Header from "../components/header/header";
import HeaderInfo from "../components/header/headerinfo";
import DataVizBackground from "../components/datavizbackground/datavizbackground";
import Grid from "../components/grid/grid";
import Project from "../components/project/project";
import FontStyles from "../components/FontStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import {
  useTransition,
  useSpring,
  useChain,
  animated,
  config,
  useSpringRef,
} from "react-spring";

import META from "../../content/home/homepage.json";
import PROJECTS from "../../content/projects/projects.json";

const Intro = () => (
  <>
    <DataVizBackground></DataVizBackground>
    <HeaderInfo
      content={
        <p
          style={{
            fontFamily: "Nib Pro Regular",
            backdropFilter: "blur(2.5px)",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          I am a product designer and technologist specializing in{" "}
          <b>data visualization. </b>
          Currently I work at <a href="https://www.jpl.nasa.gov/">NASA JPL</a>.
          <br />
          I am inspired by creatives both in the sciences and the arts who deal
          with themes of complexity and flow of information.
          <br />
          Here is a selection of my work:
        </p>
      }
    />
  </>
);

const Contact = () => (
  <HeaderInfo
    content={
      <p>
        Here are ways you can reach me:
        <br />
        <ul>
          <li>
            <a href="https://github.com/invizibility">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/invizibility">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aprameya-mysore/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:a.mysore@gmail.com">Email</a>
          </li>
        </ul>
      </p>
    }
  />
);

const CV = () => (
  <HeaderInfo
    content={
      <p>
        Aprameya is a product designer sdfsd technologist specializing in{" "}
        <b>data visualization</b> at{" "}
        <a href="https://www.jpl.nasa.gov/">NASA JPL</a>
        <br />
        Here are some of his selected projects:
      </p>
    }
  />
);

console.log(META);
// markup
const IndexPage = () => {
  const [introVisibility, setIntroVisibility] = React.useState(true);
  const location = useLocation();
  const gridTransitionRef = useSpringRef();
  const gridTransition = useTransition(location, {
    key: location.pathname == "/",
    from: {
      opacity: 0.0,
      //backgroundColor: "red",
    },
    enter: {
      opacity: 1.0,
      //backgroundColor: "blue",
    },
    // leave: {
    //   opacity: 0.0,
    //   //backgroundColor: "green",
    // },
    ref: gridTransitionRef,
    delay: 950,
    config: config.molasses,
  });
  const projTransitionRef = useSpringRef();
  const projTransition = useTransition(location, {
    key: location.pathname.includes("/project"),
    from: {
      opacity: 0.0,
      //backgroundColor: "red",
    },
    enter: {
      opacity: 1.0,
      //backgroundColor: "blue",
    },
    // leave: {
    //   opacity: 0.0,
    //   //backgroundColor: "green",
    // },
    ref: projTransitionRef,
    delay: 550,
    //config: config.molasses,
  });
  const transitions = useTransition(location, {
    key: location.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    //delay: 600
  });

  let history = useHistory();

  const [prevLocation, setPrevLocation] = React.useState(location);
  const [currLocation, setCurrLocation] = React.useState(location);
  React.useEffect(() => {
    setPrevLocation(currLocation);
    setCurrLocation(location);
  }, [location]);

  const currLocationTransRef = useSpringRef();
  const currLocationTransition = useTransition(currLocation, {
    key: currLocation.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: config.gentle,
    ref: currLocationTransRef,
  });

  const prevLocationTransRef = useSpringRef();
  const prevLocationTransition = useTransition(prevLocation, {
    key: prevLocation.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    ref: prevLocationTransRef,
  });

  useChain([
    prevLocationTransRef,
    currLocationTransRef,
    gridTransitionRef,
    projTransitionRef,
  ]);
  // make a route for each item

  console.log(META);
  return (
    <div>
      <Header title="aprameya mysore" />

      <div
        style={{
          position: "relative",
          top: "100px",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        {currLocationTransition((style, item, t, key) => (
          <animated.div key={key} style={style}>
            <Switch location={item}>
              {/* <Route path="/about"><About /></Route> */}
              <Route path="/cv">
                <CV />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route exact path="/">
                {gridTransition((style, item, key) => (
                  <>
                    <Intro />
                    <animated.div
                      style={{ ...style, top: "20vh", width: "100%" }}
                      key={key}
                    >
                      <Grid items={META.grid} />
                    </animated.div>
                  </>
                ))}
              </Route>
              {/* <Route path="/">
                <animated.div
                  style={{  top: "20vh", width: "100%" }}
                >
                  <Grid items={META.grid} />
                </animated.div>
              </Route> */}
              {META.grid.map((item, i) => {
                console.log(item);
                console.log(PROJECTS.projects);
                const thisProjInfo = PROJECTS.projects.filter(
                  (proj) => proj.title === item.title
                )[0];
                console.log(thisProjInfo);
                return (
                  <Route path={`/${item.route}`} key={`route-${i}`}>
                    {projTransition((style, item, key) => (
                      <animated.div style={style} key={key}>
                        <Project {...thisProjInfo} />
                      </animated.div>
                    ))}
                  </Route>
                );
              })}
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
};
// export const query = graphql`
//   query HomepageQuery {
//     homeJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//       grid {
//         title
//         copy
//         route
//         image {
//           childImageSharp {
//             fluid(maxHeight: 500, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;

export const App = () => (
  <Router>
    <FontStyles />
    <IndexPage />
  </Router>
);
