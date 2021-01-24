const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/test.txt",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          path.resolve(__dirname, "./src/loaders/toUpperCase-loader.js"),
          path.resolve(__dirname, "./src/loaders/reverse-loader.js"),
        ],
      },
    ],
  }
};
