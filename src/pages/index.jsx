import ReactDOM from "react-dom";
import { App } from "./app";
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
