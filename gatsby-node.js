const path = require("path");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createtTypes } = actions;
  const typeDefs = `
  type intro implements Node {
    title: String
    description: String
    content: String
  }
  `;
};
