import * as React from "react";
// import { graphql } from "gatsby";
import Header from "../components/header/header";
import HeaderInfo from "../components/header/headerinfo";
import Grid from "../components/grid/grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import META from "../../content/home/homepage.json";
import CONTENT from "../../content/home/intro.html";

const Intro = (
  <HeaderInfo
    content={
      <p>
        I am a product designer and technologist specializing in{" "}
        <b>data visualization</b>. Currently I work at{" "}
        <a href="https://www.jpl.nasa.gov/">NASA JPL</a>
        <br />I am inspired by creatives both in the sciences and the arts who
        deal with themes of complexity and flow of information. Here are some of
        my selected projects:
      </p>
    }
  />
);

const About = (
  <HeaderInfo
    content={
      <p>
        Aprameya is a product designer and technologist specializing in{" "}
        <b>data visualization</b> at{" "}
        <a href="https://www.jpl.nasa.gov/">NASA JPL</a>
        <br />
        Here are some of his selected projects:
      </p>
    }
  />
);

const Contact = (
  <HeaderInfo
    content={
      <p>
        Aprameya is a product designer and technologist specializing in{" "}
        <b>data visualization</b> at{" "}
        <a href="https://www.jpl.nasa.gov/">NASA JPL</a>
        <br />
        Here are some of his selected projects:
      </p>
    }
  />
);

const CV = (
  <HeaderInfo
    content={
      <p>
        Aprameya is a product designer and technologist specializing in{" "}
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
  //debugger;
  // make a route for each item
  return (
    <>
      <Router>
        <Header title="aprameya mysore" />

        <Switch>
          <Route path="/about">{About}</Route>
          <Route path="/cv">{CV}</Route>
          <Route path="/contact">{Contact}</Route>
          <Route path="/">
            <div style={{ position: "relative", top: "200px" }}>{Intro}</div>
            <div style={{ position: "absolute", top: "20vh" }}>
              <Grid items={META.grid} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

import ReactDOM from "react-dom";

ReactDOM.render(<IndexPage />, document.getElementById("container"));

export default IndexPage;

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
