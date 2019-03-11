<template>
  <div id="app">
    <header class="header">
      <router-link to="/home">Home</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/list">List</router-link>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyFooter from './components/footer.vue'
export default {
  components: {
    MyFooter
  }
}
</script>
<style lang="stylus">
*
  margin 0
  padding 0
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  color #34495e
  overflow-y scroll
div
  box-sizing border-box
</style>

<style scoped lang="stylus">
#app
  position relative
  top 0
  left 0
  width 100%
  min-height 100vh
  padding-bottom 320px
.header
  width 100%
  height 60px
  border-bottom 1px solid #ccc
  background-color #f69
  text-align center
  .title
    line-height 3
    font-size 20px
  a
    display inline-block
    height 60px
    color rgba(255, 255, 255, .8)
    line-height 60px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    font-size 18px
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
.view
  padding 20px 50px
</style>