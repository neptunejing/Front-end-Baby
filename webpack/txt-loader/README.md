### 说明文档

简单的 .txt 文件 loader
- reverse-loader：将 txt 文件的字符逆序
- toUpperClass-loader：将逆序后的字符全部转为大写，分为同步与异步实现 

详细说明见：[实现一个 loader](https://www.yuque.com/gesidalijiashidai/fgeemd/bnsb12)

### 运行项目
1. 进入项目目录，执行 `npm install` 导入依赖包
2. 使用 `npm run build` 即完成打包，打包后结果放置在 `\dist` 下
3. 当前为同步模式，需要异步请取消 toUpperCase-loader.js 的注释