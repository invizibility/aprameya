import ReactDOM from "react-dom";
import React from "react";
import { App } from "./app";

ReactDOM.render(<App />, document.getElementById("container"));
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
