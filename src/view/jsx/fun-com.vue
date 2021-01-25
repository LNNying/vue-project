<template>
  <div>
    <my-com :list="list" @click="but">按钮</my-com>
  </div>
</template>

<script>
  import myCom from './com';

  export default {
    name: "fun-com",
    components: {myCom},
    data() {
      return {
        list: [
          {
            dictName: '1',
            dictValue: '1'
          },
          {
            dictName: '2',
            dictValue: '2'
          }
        ]
      }
    },
    methods: {
      but() {
        console.log('sdf');
      }
    }
  }
</script>

<style scoped>

</style>
