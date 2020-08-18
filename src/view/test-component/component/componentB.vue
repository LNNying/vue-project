<template>
  <div>
    {{this.$attrs}}
  </div>

</template>

<script>
    export default {
        name: "componentB",
        props: {
          titleB: {
            String
          }
        },
      mounted () {
        console.log(this.titleB);
      }
    }
</script>

<style scoped>

</style>
