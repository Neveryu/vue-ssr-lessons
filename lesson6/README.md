**内容**：这一节实现【数据】

我们知道，服务端渲染最重要的部分就是“数据”了。既然是服务端渲染，那么就应该是服务端将运算处理后的数据填到应用程序中，然后将整个应用程序返回到前端。所以**在服务端渲染过程之前，需要先预取和解析好这些数据。**

另一个需要关注的问题是在客户端，在挂载 (mount) 到客户端应用程序之前，需要获取到与服务器端应用程序完全相同的数据 - 否则，客户端应用程序会因为使用与服务器端应用程序不同的状态，然后导致混合失败。

【在这里需要好好的思考一下，vue 的服务端渲染是如何实现的？如何理解“客户端应用程序会因为使用与服务器端应用程序不同的状态，然后导致混合失败”这句话？第 4 节中的 vue 服务端渲染结构图是否理解清楚了？】

我们在服务端预取和解析数据的时候，将这些数据填充到“状态容器(state container)”中，然后客户端也使用这里面的数据，就可以保证客户端与服务器端拥有相同的状态了。【状态容器如何实现？】

我们使用 vuex 来作为“状态容器”，此外，我们将在 HTML 中序列化(serialize)和内联预置(inline)状态。这样，在挂载(mount)到客户端应用程序之前，可以直接从 store 获取到内联预置(inline)状态。

课程 6 的运行步骤：
``` bash
cd lesson6
npm i
npm start
```
浏览器访问 [http://localhost:8888](http://localhost:8888)

这一节增加的主要内容有：
```
1、创建 store 实例，app.js 中引入
2、在 路由组件 中放置数据预取逻辑，暴露出一个自定义静态函数 asyncData 。【哪些是路由组件？】
3、entry-server.js 中，我们可以通过路由获得与 router.getMatchedComponents() 相匹配的组件，
如果组件暴露出 asyncData，我们就调用这个方法。然后我们需要将解析完成的状态，附加到渲染上下文(render context)中。
4、然后通过 window.__INITIAL_STATE__ 将服务端 store 内容同步到客户端。
```
如何同步的？
```js
// entry-server.js
// 当我们将状态附加到上下文，
// 并且 `template` 选项用于 renderer 时，
// 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
context.state = store.state
```
然后
```
5、【客户端数据预取】在 entry-client.js 中
```
```js
// entry-client.js
// 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，
// 自动嵌入到最终的 HTML 中。
// 而在客户端，在挂载到应用程序之前，store 就应该获取到状态：
if(window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
```
```
6、这样就实现了客户端应用程序与服务器端应用程序保持相同的状态。
7、ok，现在客户端的 store 里面有了和服务端一样的数据了，怎么取出来用呢？
8、客户端数据预取
    1.在路由导航之前解析数据
    2.匹配要渲染的视图后，再获取数据
9、上面两种方案，二选一（我选用的是第一种）
```
但无论你选哪一种，当路由组件重用（同一路由，但是 `params` 或 `query` 已更改，例如，从 `user/1` 到 `user/2`）时，也应该调用 `asyncData` 函数。我们也可以通过纯客户端 (`client-only`) 的全局 `mixin` 来处理这个问题：
```js
// entry-client.js
Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})
```

以上就是本次更新内容的说明，看起来要写很多代码！这是因为通用数据预取可能是服务器渲染应用程序中最复杂的问题。