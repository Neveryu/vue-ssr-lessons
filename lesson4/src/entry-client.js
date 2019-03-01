import { createApp } from './app'

// 客户端特定引导逻辑……

const { app } = createApp()

// actually mount to DOM
// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#app')
