import Vue from 'vue'
import App from './app.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'

// mixin for handling title 
Vue.mixin(titleMixin)

// 导出一个工厂函数，用于创建新的应用程序，router 和 store 实例
export function createApp () {
  // 创建 router 和 store 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态(route state)到 store
  sync(store, router)

  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    // 根实例简单的渲染应用程序组件
    render: h => h(App)
  })

  // 暴露 app, router 和 store
  return { app, router, store }
}
