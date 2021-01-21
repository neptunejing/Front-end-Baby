const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development", // 当前模式
  entry: "./src/main.js", // 入口文件
  output: {
    filename: "[name].[hash:8].js", // 打包后文件名,使用8位hash
    path: path.resolve(__dirname, "dist"), // 打包后出口路径
  },
  devServer: {
    compress: true,
    hot: true,
    port: 8080, // 监听端口，默认8080
    inline: true,
    hotOnly: true, //当编译失败时，不刷新页面
    overlay: true, //用来在编译出错的时候，在浏览器页面上显示错误
    publicPath: "/", //一定要加
    open: true, // 自动打开页面
    watchOptions: {
      // 不监听的文件或文件夹，支持正则匹配
      ignored: /node_modules/,
      // 监听到变化后等1s再去执行动作
      aggregateTimeout: 1000,
      // 默认每秒询问1000次
      poll: 1000,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Vue',
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
    //路径别名
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./src"),
    },
    //路径别名自动解析确定的扩展
    extensions: [".js", ".vue", ".json"],
  },
};
