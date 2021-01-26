const koa = require("koa");

const port = 3001;
const app = new koa();
app.use(async (ctx, next) => {
  const { callback } = ctx.request.query;
  const resBody = {
    title: "JSONP跨域:",
    msg: "跨域成功，收到来自3001端口的响应 🤡",
  };
  ctx.response.body = `${callback}(${JSON.stringify(resBody)})`;
});

app.listen(port, () => {
  console.log(`服务器启动在${port}端口`);
});
