import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Grid from "../components/grid";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Header title="aprameya mysore" />
      <div style={{ position: "absolute", top: "7.5%" }}>
        <Intro data={data.homeJson.content.childMarkdownRemark} />
      </div>
      <div style={{ position: "absolute", top: "20%" }}>
        <Grid items={data.homeJson.grid} />
      </div>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      grid {
        title
        copy
        route
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            gatsbyImageData
          }
        }
      }
    }
  }
`;
