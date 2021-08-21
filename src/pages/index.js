import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Header title="aprameya mysore" />
      <div style={{ position: "absolute", top: "75px" }}>
        <Intro data={data.markdownRemark} />
      </div>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    markdownRemark {
      html
    }
    allImageSharp(
      filter: {
        children: {}
        id: { ne: "70c45604-f9d4-5987-8533-76cd9bd304b6" }
      }
    ) {
      nodes {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
          originalName
        }
        id
      }
    }
  }
`;
