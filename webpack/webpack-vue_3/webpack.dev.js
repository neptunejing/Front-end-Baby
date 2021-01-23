const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    hot: true,
    port: 8080, 
    inline: true,
    hotOnly: true, 
    overlay: true,
    publicPath: "/", 
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 1000,
      poll: 1000,
    },
  },
});
