<template>
  <div id="list">
    <ul>
      <li class="item" v-for="(item, index) of projectList">
        <router-link class="link" :to='"/detail/" + item.id'>{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  title: 'List',
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('getAllProject')
  },
  computed: {
    ...mapGetters([
      'projectList'
    ])
  }
}
</script>

<style scoped lang="stylus">
#list
  padding 10px 150px
  .item
    margin 10px 0
    .link
      color #09f
      &:hover
        color #f36
</style>
