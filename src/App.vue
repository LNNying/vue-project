<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    }
  },
  created() {
    // setInterval(() => {
    //   console.log(this.isIdle);
    // }, 1000)
  }
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
</style>
