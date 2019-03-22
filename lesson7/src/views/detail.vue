<template>
  <div id="detail">
    <ul>
      <li class="item">
        <span class="name b">名称</span>
        <span class="result b">结果</span>
      </li>
      <li class="item" v-for="(value, key, index) of _filter(res.item)">
        <template v-if="key === 'address'">
          <span class="name">{{key}}</span>
          <a :href="value" target="_blank" class="result">{{value}}</a>
        </template>
        <template v-else>
          <span class="name">{{key}}</span>
          <span class="result">{{value}}</span>
        </template>
      </li>
      <li class="item" v-if="Object.keys(res.item).length === 0">
        <span class="name">暂无数据</span>
        <span class="result">暂无数据</span>
      </li>
    </ul>
    <!-- 分页 -->
    <div class="paganation">
      <span class="item" @click="handerFirstPage">第一页</span>
      <span class="item" @click="handerPrevPage">上一页</span>
      <!-- <input type="text" class="current-page" :value="this.$route.params.id" @keyup.enter="handerEnter($event)"/> -->
      <span class="item" @click="handerNextPage">下一页</span>
      <span class="item" @click="handerLastPage">最后一页</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'detail',
  title() {
    return 'Detail ' + this.res.item.id
  },
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.params.id)
  },
  methods: {
    _filter(item) {
      let _item = JSON.parse(JSON.stringify(item))
      delete _item.id
      return _item
    },
    handerFirstPage() {
      this.$router.push({ path: '/detail/1' })
    },
    handerPrevPage() {
      let _current = this.$route.params.id
      if(_current > 1) {
        this.$router.push({ path: `/detail/${_current - 1}` })
      }
    },
    handerNextPage() {
      let _current = this.$route.params.id
      if(_current >= this.res.total) {

      } else {
        this.$router.push({ path: `/detail/${parseInt(_current) + 1}` })
      }
    },
    handerLastPage() {
      this.$router.push({ path: `/detail/${this.res.total}` })
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters({
      res: 'getDetail'
    })
  }
}
</script>

<style scoped lang="stylus">
#detail
  ul
    width 500px
    margin 0 auto
  .item
    list-style none
    border 1px solid #ccc
    width 500px
    height 40px
    line-height 40px
    .b
      font-weight 600
    .name
      display inline-block
      text-align center
      width 100px
      border-right 1px solid #ccc
    .result
      display inline-block
      width 399px
      text-align center
  .paganation
    width 500px
    margin 20px auto 0
    text-align center
    .item
      margin 0 10px
      cursor pointer
      border none
      color #f36
      &:hover
        color #f69
        font-weight bolder
    .current-page
      width 30px
      height 20px
      line-height 20px
      text-align center
</style>
