<template>
  <div>
    <!--
        注释 options 是数据
        reduce 可以返回对用code
        label  要显示的字段名

    -->
    <v-select :options="options" v-model="selectData" :reduce="name => name.code" label="name"></v-select>
  </div>
</template>

<script>
  export default {
    name: "vue-select-com",
    data() {
      return {
        options: [{
          name: 'company',
          code: 'cm'
        }],
        selectData: ''
      }
    },
    watch: {
      selectData(newVal) {
        console.log(newVal)
      }
    }
  }
</script>

<style scoped>

</style>
