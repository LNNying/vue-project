<template>
  <div id="areaTree">
    <div class="tree-box">
      <div class="zTreeDemoBackground left">
        <ul id="treeDemo" class="ztree"></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-tree',
  data () {
    return {
      setting: {
        data: {
          simpleData: {
            enable: true,
            idKey: 'id',
            pIdKey: 'pId',
            rootPId: 0
          }
        }
      },
      zNodes: [
        { id: 1, pId: 0, name: '父节点1' },
        { id: 11, pId: 1, name: '子节点1' },
        { id: 12, pId: 1, name: '子节点2' }
      ]
    }
  },
  mounted () {
    console.log(this.$jquery('#treeDemo'))
    $.fn.zTree.init(this.$jquery('#treeDemo'), this.setting, this.zNodes)
  }
}
</script>

<style scoped>
  /*@import "~ztree-v3/css/demo.css";*/
  @import "~ztree-v3/css/zTreeStyle/zTreeStyle.css";
</style>
