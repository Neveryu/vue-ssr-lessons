<template>
  <footer id="footer">
    <div class="top">
      <div class="left top-item">
        <h2>合作伙伴</h2>
        <hr>
        <ul>
          <li>腾讯云</li>
          <li>腾讯开发平台</li>
          <li>微信广告</li>
          <li>NIKE专卖店</li>
        </ul>
      </div>
      <div class="center top-item">
        <h2>旅游FAQ</h2>
        <hr>
        <ul>
          <li>旅游合同签订方式？</li>
          <li>儿童价是基于什么制定的？</li>
          <li>旅游的线路品质怎么界定的？</li>
          <li>单房差是什么？</li>
        </ul>
      </div>
      <div class="right top-item">
        <h2>联系方式</h2>
        <hr>
        <ul>
          <li>微博：<a class="weiboLink" href="https://weibo.com/Neveryu">https://weibo.com/Neveryu</a></li>
          <li>邮件：<a class="emailLink" href="mailto:never_yu@foxmail.com?cc=never_yu@qq.com&bcc=never_yu@qq.com&subject=From%20your%20travel%20site%20power%20by%20vue%20and%20prerender!">never_yu@foxmail.com</a></li>
          <li>地址：马路边上</li>
          <li>广告位招租</li>
        </ul>
      </div>
      <div class="vue-sell">
        <!-- <img src="~@/assets/vue-sell.png" width="130" alt=""> -->
        <p>用vue构建的外卖app</p>
      </div>
      <div class="vue-music">
        <!-- <img src="~@/assets/vue-music.png" width="130" alt=""> -->
        <p>用vue构建的音乐app</p>
      </div>
    </div>
    <div class="bottom">
      Copyright© 2018 - {{nowYear}} | Author <a class="authorLink" href="https://neveryu.github.io/neveryu/">Never Yu</a> | All Rights Reserved | Power by <a class="vueLink" href="javascript:;">Vue</a> & <a class="vueLink" href="javascript:;">SSR</a>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'MyFooter',
    created() {
      this.nowYear = new Date().getFullYear()
    }
  }
</script>
<style scoped lang="stylus">
  #footer
    position absolute
    bottom 0
    width 100%
    min-width 800px
    height 320px
    background-color #222
    color #ccc
    clear both
    .top
      width 1263px
      height 240px
      margin 0 auto
      text-align center
      .top-item
        display inline-block
        width 410px
        height 280px
        text-align left
        vertical-align top
        .weiboLink
          color #fc0
        .emailLink
          color #f66
        h2
          font-size 24px
          font-weight normal
          padding 20px 0 0 20px
        hr
          width 90%
          border 1px dashed #333
        ul
          font-size 18px
          color #777
          text-indent 20px
          line-height 2
      .vue-sell
        position absolute
        top 20px
        left 20px
      .vue-music
        position absolute
        top 20px
        right 20px
    .bottom
      height 80px
      line-height 80px
      text-align center
      color #777
      background-color #000
      border-top 1px solid #444
      .authorLink
        color #f36
      .vueLink
        color #42b983
</style>
