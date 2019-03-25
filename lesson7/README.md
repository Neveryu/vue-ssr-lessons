**内容**：这一节增加了一些额外的辅助工具【`gzip`、缓存、`favicon`、`title`】；然后增加了生产环境的打包和运行命令。

1、 服务端使用 `compression` 开启 Gzip。

2、缓存策略

**页面级别缓存**，如果内容不是用户特定 (`user-specific`)（即对于相同的 URL，总是为所有用户渲染相同的内容），我们可以利用名为 `micro-caching` 的缓存策略，来大幅度提高应用程序处理高流量的能力。

**组件级别缓存**，`vue-server-renderer` 内置支持组件级别缓存 (`component-level caching`)。要启用组件级别缓存，你需要在创建 `renderer` 时提供具体缓存实现方式(`cache implementation`)。典型做法是传入 `lru-cache`。

3、使用 `serve-favicon` 中间件，从服务端来提供网页标签页的小 `logo`。

4、动态 `title`

我们动态生成 `title` ，然后判断是服务端还是客户端，分别在各自对应的钩子函数，完成网页 `title` 的赋值操作（如果是服务端就在 `created` 钩子函数中，如果是客户端就是 `mounted` 钩子函数中）。然后使用 `Vue.mixin()` 将钩子函数混入。

4.1、Head 管理

使用相同的策略，你可以轻松地将此 `mixin` 扩展为通用的头部管理工具 (generic head management utility)。

5、新增构建打包以及运行 server 的命令

``` json
"scripts": {
    "dev": "npm start",
    "start": "nodemon server.js",
    "server": "cross-env NODE_ENV=production node server",
    "build": "rimraf dist && npm run build:client && npm run build:server",
    "build:client": "cross-env NODE_ENV=production webpack --config build/webpack.client.config.js --progress --hide-modules",
    "build:server": "cross-env NODE_ENV=production webpack --config build/webpack.server.config.js --progress --hide-modules"
}
```

课程 7 的开发运行步骤：

``` bash
cd lesson7

# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev
```

课程 7 构建以及 server 运行步骤：

``` bash
# build for production（打生产环境的包）
npm run build

# serve in production mode（运行生产环境）
npm run server
```

