<template>
    <div>
      <component-a :title="titleA" :title-b="titleB" titl="sdfvsfv"></component-a>
    </div>
</template>

<script>
    import ComponentA from "./component/componentA";
    export default {
        name: "test-component",
      components: {ComponentA},
      data () {
          return {
            titleA: '传给组件A',
            titleB: '传给组件B'
          }
      }
    }
</script>

<style scoped>

</style>
