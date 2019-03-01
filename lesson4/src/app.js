import Vue from 'vue'
import App from './app.vue'

// 导出一个工厂函数，用于创建新的应用程序
export function createApp () {
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  return { app }
}
