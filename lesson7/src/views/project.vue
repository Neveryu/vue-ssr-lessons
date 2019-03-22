<template>
  <div id="project">
    <div class="item vue-sell">
      <img src="~/public/vue-sell-visit.png" width="130" alt="">
      <p>
        <a target="_blank" href="https://neveryu.github.io/sell/index.html">用vue构建的外卖app</a>
        <br>
        <span>手机扫码体验</span>
      </p>
    </div>
    <div class="item vue-music">
      <img src="~/public/vue-music-visit.png" width="130" alt="">
      <p>
        <a target="_blank" href="https://git.io/fhnor">用vue构建的音乐app</a>
        <br>
          <span>手机扫码体验</span>
      </p>
    </div>
    <div class="item vue-tour">
      <img src="~/public/vue-prerender.png" width="130" alt="">
      <p><a target="_blank" href="https://git.io/fp8xw">vue预渲染实例</a></p>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Project'
}
</script>

<style scoped lang="stylus">
#project
  display flex
  padding 20px 50px
  .item
    flex 1
    a
      color #f36
</style>