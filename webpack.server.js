const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webapackNodeExternals = require("webpack-node-externals");

const config = {
  // Building a bundle for Node.js server rather than browser
  target: "node",
  // Root file of server
  entry: "./src/index.js",
  // Tell webapck where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //   // Ignore files with webpack
  externals: [webapackNodeExternals()],
};

module.exports = merge(baseConfig, config);
