<template>
  <div ref="jsoneditor" style="width: 600px;height: 400px; border: 1px solid red;"></div>
</template>

<script>
export default {
  name: 'jsonEdit',
  data () {
    return {}
  },
  mounted () {
    let json = {
      'Array': [1, 2, 3],
      'Boolean': true,
      Null: null,
      'Number': 123,
      'Object': { 'a': 'b', 'c': 'd' },
      'String': 'Hello World'
    }
    let options = {
      mode: 'code',
      modes: ['code'],
      onError: function (err) {
        alert(err.toString())
      }
    }
    let codeEditor = new this.$jsoneditor(this.$refs.jsoneditor, options)

    codeEditor.set(json)
  }
}
</script>

<style scoped>

</style>
