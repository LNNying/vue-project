<template>
  <div>多级菜单 -> 二级-1</div>
</template>
<script>
  import {mapStats,mapGetters, mapActions} from 'vuex'
export default {
  name: 'level_2_1',
  computed: {
    ...mapStats('user',{
      userName: state => state.userName
    }),
    ...mapGetters('user', {

    })
  },
  methods: {
    ...mapActions('user', ['updaete'])
  }
}
</script>
