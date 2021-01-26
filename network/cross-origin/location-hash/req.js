const koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");

const app = new koa();
const port = 3000;
app.use(koaStatic(path.resolve(__dirname, "./static/3000")));
app.listen(port, () => {
  console.log(`服务器启动在${port}端口`);
});
