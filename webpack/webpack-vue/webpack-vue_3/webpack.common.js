const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].[hash:8].js", // 打包后文件名,使用8位hash
    path: path.resolve(__dirname, "dist"), // 打包后出口路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Vue",
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]",
                  publicPath: "../", //为了防止图片路径错误
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]",
                  publicPath: "../",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
        loader: "url-loader",
        options: {
          limit: 10240,
          fallback: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[hash:8].[ext]",
              publicPath: "../",
            },
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".vue", ".json"],
  },
};
