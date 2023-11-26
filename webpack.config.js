var path = require("path");
var SRC_DIR = path.join(__dirname, "/src");
// console.log("SRC_DIR", SRC_DIR);
var DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: [/\.jsx?/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
