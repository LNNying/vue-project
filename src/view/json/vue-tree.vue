<template>
  <div id="areaTree">
    <!--<div class="tree-box">-->
      <!--<div class="zTreeDemoBackground left">-->
        <!--<ul id="treeDemo" class="ztree"></ul>-->
      <!--</div>-->
    <!--</div>-->
    <vue-main-tree :tree-data="zNodes" @onClick="onClickTree" :check="true" :drag="true"></vue-main-tree>
  </div>
</template>

<script>
import VueMainTree from "../../components/zTree/vue-main-tree";
export default {
  name: 'vue-tree',
  components: {VueMainTree},
  data () {
    return {
      zNodes: [
        { id: 1, pId: 0, name: '父节点1' },
        { id: 11, pId: 1, name: '子节点1' },
        { id: 12, pId: 1, name: '子节点2' },
        { id: 2, pId: 0, name: '父节点2', isParent: true }
      ]
    }
  },
  methods: {
    onClickTree(treeId, treeNode) {
      console.log(treeNode)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
