# 跨域实战

> 以下的 Demo 都基于 Koa2 服务端，跨域通过限定 localhost 下的不同端口模拟
> 运行时本地需安装 node，执行 npm install 安装依赖后执行子目录的 bat 文件即可

### CORS
运行说明：执行 bat，访问 localhost:3000/index.html 即可
- 请求端：运行于 localhost:3000 的请求端通过 ajax 向运行于 localhost:3001 的响应端发送跨域请求
- 响应端：相应时需要设置 header 的 `Access-Control-Allow-Origin` 为请求端域名（设置为 * 时不安全）

---
### JSONP
运行说明：执行 bat，访问 localhost:3000/index.html 即可

- 请求端：点击 button 时，触发动态添加 `<script>`，且令 `src` 为目标域，目标域最后应该携带一个回调函数名称，该回调函数需要在请求端实现
- 响应端：截取请求中的 callback 字段，拼接要发送的数据，构成 `callback({... : "..."})` 的 JS 代码形式作为响应体，请求端收到响应体后，会直接执行回调

--- 
### location.hash + iframe
运行说明：执行 bat，访问 localhost:3000/a.html 即可

- 请求端(a.html)：3000/a.html 创建 iframe 指向目标域 3001/b.html，b 成为 a 的子页面
- 响应端(b.html)：3001/b.html 再创建 iframe 指向目标域 3000/c.html，在 src 后拼接 hash 字段传递参数
- 中介(c.html)：3000/c.html 与 3000/a.html 同源，因此通过 `window.parent.parent` 上溯两级获取到 a.html，修改它的 hash，而 a.html 上的检查函数会察觉到 hash 的变化，获取数组

总结：这种方式以三重页面套娃实现，利用了 `window.location` 可以**跨域读写**，`window.parent` 可以**跨域读**的特性（具体参考 [MDN ：跨源脚本 API 访问](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy#window)）

---
### postMessage
运行说明：执行 bat，访问 localhost:3000/a.html 即可

- 请求端(a.html)：3000/a.html 创建 iframe 指向目标域 3001/b.html，通过 `iframe.contentWindow` 获取对目标域窗口的引用，调用其上的 `postMessage()` 方法，向 3001 端口分发消息；同时该窗口开始监听 message 事件，等待跨域的回复
- 响应端(b.html)：3001/b.html 监听 window 上的 message 事件，并通过 `window.parent` 获得父窗口引用，执行该引用的 `postMessage()`，向 3000 端口分发消息

总结：当跨域请求方获取对方窗口的引用（iframe.contentWindow 只是一种方法），即可通过 [window.postMessage()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 方法传递消息，响应方只需要监听 message 事件即可接收数据，通常建议传入明确的 targetOrigin 保证安全

---
### Window.name
运行说明：执行 bat，访问 localhost:3000/a.html 即可

- 请求端(a.html)：3000/a.html 创建 iframe 指向目标域 3001/b.html，添加对于 iframe 的 load 事件监听；第一次触发时说明已经完成跨域请求，修改 iframe.src 到同源文档 3000/c.html，这样的修改不会改变 window.name；第二次触发时，通过 iframe.contentWindow.name 获取窗口的 name
- 响应端(b.html)：**3001/b.html 直接设置 window.name 为要传递的数据即可
- 中介(c.html)：window.name **不会因为新文档的载入而改变**，由 b 载入 c 时，还是同一个窗口，则窗口名未改变，a 通过 iframe.contentWindow 获得同源文档 c 的窗口引用，即可获取窗口名

总结：每个窗口都有自己独立的 window.name，无论重载的文档是否同源，只要窗口未销毁就会保持同一个window.name（别的文档未重写时）；但是 window.name 不支持跨域访问，需要让窗口先后被跨域修改 name，再重载同源文档后才能被最初请求的文档访问。利用 window.name 可以存储不超过2M的 string 数据