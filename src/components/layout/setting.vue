<template>
  <div>
    <i-switch v-model="animate.disabled" @on-change="val => setAnimate({...animate, disabled: val})"></i-switch>
    <Select v-model="animate.name" @on-change="val => setAnimate({...animate, name: val})">
      <Option v-for="(item, index) in animates" :key="index" :value="item.name">{{item.alias}}</Option>
    </Select>

    <Select v-model="animate.direction" @on-change="val => setAnimate({...animate, direction: val})">
      <Option v-for="(item, index) in directions" :key="index" :value="item">{{item}}</Option>
    </Select>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "setting",
    data() {
      return {
      }
    },
    computed: {
      ...mapState('set', ['animates', 'animate']),
      directions() {
        return this.animates.find(item => item.name == this.animate.name).directions
      }
    },
    methods: {
      ...mapMutations('set', ['setAnimate']),
      onchange(val) {
        console.log(val);
      }
    },
    watch: {
      'animate.name': function(val) {
        this.setAnimate({name: val, direction: this.directions[0]})
      }
    },
    mounted() {
      console.log(this.animates);
    }
  }
</script>

<style scoped>

</style>
