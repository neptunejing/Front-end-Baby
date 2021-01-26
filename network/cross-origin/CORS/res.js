const koa = require("koa");

const app = new koa();
app.use(async (ctx) => {
  // 后端设置 Access-Control-Allow-Origin，指定允许3000端口的请求跨域读取
  ctx.response.set("Access-Control-Allow-Origin", "http://localhost:3000");
  ctx.response.body = "跨域成功，收到来自3001端口的响应 🤡";
});
const port = 3001;
app.listen(port, () => {
  console.log(`服务器启动在${port}端口`);
});
