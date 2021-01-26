const koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");

const port = 3001;
const app = new koa();
app.use(koaStatic(path.resolve(__dirname, "./static/3001")));
app.listen(port, () => {
  console.log(`服务器启动在${port}端口`);
});
