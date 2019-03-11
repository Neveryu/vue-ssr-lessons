import Vue from 'vue'
import App from './app.vue'
import { createRouter } from './router'

// 导出一个工厂函数，用于创建新的应用程序，router 实例
export function createApp () {
  // 创建 router 实例
  const router = createRouter()

  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    render: h => h(App)
  })
  return { app, router }
}
