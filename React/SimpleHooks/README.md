阅读《React 学习手册》第二版 Ch7 内容时完成的 demo

### 运行项目
1. 进入项目目录，执行 `npm install` 导入依赖包
2. 使用 `npm run build` 即完成打包，打包后结果放置在 `/dist` 下
3. 将 `index.html` 拷贝进 `/dist`，在浏览器打开即可

---

注意，除了公共的 `common` 目录，不同的子目录对应不同的 hook 用例，修改 `webpack.config.js` 中的入口文件路径，生成对应构建包
```
useEffect：自定义 hook + useState 完成的订阅应用
useMemo：使用表单 + useMemo 优化订阅应用
useCallback：对比一般函数和 useCallback 对渲染的影响
useReducer：三个例子展示 useReducer 用法
PureComponent：使用 memo 减少不必要渲染
```