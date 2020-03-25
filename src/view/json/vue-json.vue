<template>
  <div>
    <vue-json-editor lang="zh" :height="400" v-model="json" :show-btns="true" @json-save="onSaveJson" :exapndedOnStart="false" @json-change="onJsonChange" style="height: 100%;"></vue-json-editor>
  </div>
</template>

<script>
import VueJsonEditor from '@/components/vue-json-editor/vue-json-editor'
export default {
  name: 'vue-json',
  components: { VueJsonEditor },
  data () {
    return {
      json: {}
    }
  },
  methods: {
    onJsonChange (value) {
      console.log('value:', value)
    },
    onSaveJson (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
