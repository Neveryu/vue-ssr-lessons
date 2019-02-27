# 这是一个 vue ssr 的教学课程

>手把手带你学会 vue 的服务端渲染

本课程的内容是基于 vue ssr 的文档来的，课程的结果是完成一个 vue 服务端渲染的实例。
所以在学习本课程的时候，建议你打开 vue ssr 的文档，这样有助于理解。

本课程所包含的几个小节，都是循序渐进的，由易到难，每一个小节都是在前一个小节的基础上，添加新的内容，幅度平缓，易学易懂。

<span style="color: #f36">小提示：建议配合着 vue ssr 的文档来学习本课程。</span>

本课程内容如下：

【基础篇】

- lesson1

用最简单，明白的方式创建一个 vue 服务端渲染的应用程序。
``` js
// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})
```
课程 1 的运行步骤：
``` bash
cd lesson1
npm i
npm start
```
然后会在命令行看到输出内容： 

```html
<div data-server-rendered="true">Hello World</div>
```

-------------------

- lesson2

与服务器集成，使用 Express 作为服务器提供服务。

课程 2 的运行步骤：
``` bash
cd lesson2
npm i
npm start
```
浏览器访问 [http://localhost:8888](http://localhost:8888)

- lesson3

【中级篇】

- lesson4

- lesson5

- lesson6
