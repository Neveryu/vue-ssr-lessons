<template>
  <div id="home">
    <p class="title">这是 HOME 页</p>
    <p class="description">本页面包含的核心关键数据，是服务端计算得出，然后附加到当前渲染上下文中；不是前端通过 ajax 请求获取的。</p>
    <ul>
      <li>注册总人数： <span class="red"> {{ totalRegister }} </span></li>
      <li>登录激活总人数： <span class="red">{{ totalActiver }} </span></li>
      <li>最高月活人数： <span class="red"> {{ topMouthActiver }} </span></li>
      <li>今日登录人数： <span class="red"> {{ todayLogin }} </span></li>
    </ul>
  </div>
</template>
<script>
import { init } from '../api/home'
import { mapGetters } from 'vuex'
export default {
  // 服务端路由进来时，就会触发这个函数
  // 触发请求，服务端获取数据，存到vuex中
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('getAllData')
  },
  name: 'home',
  title: 'Home',
  data() {
    return {
      introduction: 'sssss'
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'totalRegister',
      'topMouthActiver'
    ]),
    totalActiver() {
      return this.$store.getters.totalActiver
    },
    todayLogin() {
      return this.$store.getters.todayLogin
    }
  }
}
</script>

<style scoped lang="stylus">
#home
  .title
    color #f36
    font-size 20px
    text-align center
    margin-bottom 20px
  .description
    margin-bottom 20px
  ul
    font-size 18px
    .red
      color #f36
</style>