<template>
  <div id="home">
    <p>在这一节中，会加入 vue-router 。</p>
    <p>与上一节的变动，主要是：</p>
    <br>
    <p>1、添加 .babelrc 配置文件，主要配置了 es6 的 import() 函数，以及结构运算符。</p>
    <p>2、引入 vue-router，创建 router 目录，新建一个 router 实例。</p>
    <p>3、类似于 createApp，我们也需要给每个请求一个新的 router 实例，所以在 router.js 文件中，我们导出一个 createRouter 函数，然后在通用入口 app.js 中，引入 vue 中以及输出包含路由的应用程序。</p>
    <p>4、与此同时，我们要简单的更新我们的 entry-client.js 和 entry-server.js 文件，加入路由的部分。</p>
  </div>
</template>

<style scoped lang="stylus">

</style>