<template>
  <component-b v-bind="$attrs"></component-b>
</template>

<script>
    import ComponentB from "./componentB";
    export default {
        name: "componentA",
      components: {ComponentB},
      props: {
          title: {
            String
          }
      },
      mounted() {
        console.log(this.title);
      }
    }
</script>

<style scoped>

</style>
