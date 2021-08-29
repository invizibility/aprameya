import * as React from "react";
// import { graphql } from "gatsby";
import Header from "../components/header/header";
import HeaderInfo from "../components/header/headerinfo";
import Grid from "../components/grid/grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import META from "../../content/home/homepage.json";

const Intro = () => (
  <HeaderInfo
    content={
      <p>
        I am a product designer and technologist specializing in{" "}
        <b>data visualization</b>. Currently I work at{" "}
        <a href="https://www.jpl.nasa.gov/">NASA JPL</a>
        <br />
        I am inspired by creatives both in the sciences and the arts who deal
        with themes of complexity and flow of information.
        <br />
        Here is a selection of my work:
      </p>
    }
  />
);

// const About = () => (
//   <HeaderInfo
//     content={
//       <p>
//         Aprameya is a product designer and technologist specializing in{" "}
//         <b>data visualization</b> at{" "}
//         <a href="https://www.jpl.nasa.gov/">NASA JPL</a>
//         <br />
//         Here are some of his selected projects:
//       </p>
//     }
//   />
// );

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
  // make a route for each item
  return (
    <div>
      <Router>
        <Header title="aprameya mysore" />

        <div
          style={{
            position: "relative",
            top: "100px",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <Switch>
            {/* <Route path="/about"><About /></Route> */}
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Intro />

              <div style={{ position: "absolute", top: "20vh", width: "100%" }}>
                <Grid items={META.grid} />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
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
