<template>
  <div>
    <my-com @click="but" v-model="select">
      <Option v-for="(item, index) in list" :value="item.dictValue" :key="index">{{item.dictName}}</Option>
    </my-com>
  </div>
</template>

<script>
  import myCom from './com';

  export default {
    name: "fun-com",
    components: {myCom},
    data() {
      return {
        select: '1',
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
    },
    watch: {
      select(newVal) {
        console.log(newVal);
      }
    }
  }
</script>

<style scoped>

</style>
