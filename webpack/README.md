### 说明文档

这三个小 Demo 是自己初次接触 webpack 时完成的，网上大多 webpack demo 都使用旧版本完成，自己在中间填了不少坑，水平有限，大家酌情参考。具体的文档都在与语雀：

1. [Webpack 搭建 Vue 项目-webpack-vue_1:起始](https://www.yuque.com/gesidalijiashidai/fgeemd/hzazp5)：项目初始，引入必须的 loader 和 plugin；使用 dev-server 和 source map 优化开发体验
2. [Webpack 搭建 Vue 项目-webpack-vue_2:轮播图](https://www.yuque.com/gesidalijiashidai/fgeemd/hzazp5)：使用 vue 完成轮播图应用
3. [Webpack 搭建 Vue 项目-webpack-vue_3:优化](https://www.yuque.com/gesidalijiashidai/fgeemd/hzazp5)：文档介绍 webpack 构建、输出、前端体验方面的主流优化方案；demo 则划分不同环境配置文件，将轮播图改造为懒加载形式

### 运行项目
1. 进入项目目录，执行 `npm install` 导入依赖包
2. 使用 `npm run serve` 即可通过 webpack-dev-server 充当静态资源的服务器，实时运行 build 结果，并且实现热重载
3. 使用 `npm run build` 即完成打包，打包后结果放置在 `\dist` 下