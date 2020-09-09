<style scoped>
  @import "~ztree-v3/css/zTreeStyle/zTreeStyle.css";
</style>

<template>
  <div>
    <ul id="tree" class="ztree" :style="styles"></ul>
  </div>
</template>

<script>
  export default {
    name: "vue-main-tree",
    props: {
      // 数组来源
      treeData: {
        type: Array,
        default: () => []
      },
      // 样式
      styles: {
        type: Object,
        default: () => {}
      },
      // check 属性
      check: {
        type: Boolean,
        default: false
      },
      chkDisabledInherit: {
        type: Boolean,
        default: false
      },
      chkStyle: {
        type: String,
        default: 'checkbox'
      },
      radioType: {
        type: String,
        default: 'level'
      },
      chkboxTypes: {
        type: Object,
        default: () => { return {"Y": "ps", "N": "ps" }}
      },
      // edit 编辑
      drag: {
        type: Boolean,
        default: false
      },
      showRemoveBtn: {
        type: Boolean,
        default: false
      },
      showRenameBtn: {
        type: Boolean,
        default: false
      },
      // async 异步加载
      url: {
        type: String,
        default: ''
      },
      async: {
        type: Boolean,
        default: false
      },
      autoParams: {
        type: Array,
        default: () => []
      },
      contentType: {
        type: String,
        default: 'application/x-www-form-urlencoded'
      },
      dataType: {
        type: String,
        default: 'text' // json
      },
      type: {
        type: String,
        default: 'post'
      },
      headers: {
        type: Object,
        default: () => {}
      },
      // view
      selectedMulti: {
        type: Boolean,
        default: true
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      showLine: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      txtSelectedEnable: {
        type: Boolean,
        default: false
      },
      fontCss: {
        type: Object,
        default: () => {}
      },
      expandSpeed: {
        type: String,
        default: 'fast'
      },
      dblClickExpand: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        // 配置
        setting: {
          async: {
            enable: this.async, // 是否开启异步加载
            url: this.url, // 跳转url
            autoParam: this.autoParams, // 异步提交时 需要提交的参数 ['id = zid']
            contentType: this.contentType, // 提交数据类型 默认application/x-www-form-urlencoded  application/json
            dataType: this.dataType, // 接收数据类型
            type: this.type, // 请求类型 get post
            headers: this.headers, // 请求头
          },
          view: {
            selectedMulti: this.selectedMulti, // 是否同时选中
            showIcon: this.showIcon, // 是否显示Icon
            showLine: this.showLine, // 是否显示连线
            showTitle: this.showTitle, // 是否显示title提示 data中是t标识
            txtSelectedEnable: this.txtSelectedEnable, // 是否现在tree的文本
            fontCss: this.fontCss, // 针对tree上标签title<span>ssdf</span>
            expandSpeed: this.expandSpeed, // 展开的快慢  fast slow normal
            dblClickExpand: this.dblClickExpand, // 双击是否展开父节点
          },
          edit: {
            enable: this.drag,  // 是否拖放
            showRemoveBtn: this.showRemoveBtn, // 是否显示删除按钮
            showRenameBtn: this.showRenameBtn, // 是否显示编辑按钮

          },
          check: {  // 所有前提都是enable为true
            enable: this.check, // 开启复选框
            chkDisabledInherit: this.chkDisabledInherit, // 在复选框的前提下是否开启禁用
            chkStyle: this.chkStyle, // 勾选类型 radio  checkbox
            radioType: this.radioType, // radio的分组范围 默认level(每一个节点一组) all(正棵树为一组)
            chkboxType: this.chkboxTypes, // 勾选 checkbox 对于父子节点的关联关系 看注释
          },
          data: {
            simpleData: {
              enable: true,
              idKey: 'id',
              pIdKey: 'pId',
              rootPId: 0
            }
          },
          callback: {
            beforeClick: this.beforeClickTree,
            beforeDblClick: this.beforeDblClickTree,
            onClick: this.onClickTree,
            onCheck: this.onCheckTree,
            beforeDrag: this.beforeDragTree,
            beforeDrop: this.beforeDropTree,
            onDblClick: this.onDblClickTree,
            onDrag: this.onDragTree,
            onDragMove: this.onDragMoveTree,
            onDrop: this.onDropTree,
            onExpand: this.onExpandTree,
            onRemove: this.onRemoveTree,
            onRename: this.onRenameTree,
            onRightClick: this.onRightClickTree
          }
        },
      }
    },
    methods: {
      /**
       * @param treeId  节点id
       * @param treeNode  节点
       * @param clickFlag
       */
      beforeClickTree(treeId, treeNode, clickFlag) {
        this.$emit('beforeClick', treeId, treeNode)
      },
      // 双击前
      beforeDblClickTree(treeId, treeNode) {
        this.$emit('beforeDblClick', treeId, treeNode)
      },
      // 双击点击
      onDblClickTree (event, treeId, treeNode) {
        this.$emit('onDblClick', treeId, treeNode)
      },
      // 点击前
      onClickTree(event, treeId, treeNode) {
        this.$emit('onClick', treeId, treeNode)
      },
      // 点击check或radio
      onCheckTree(event, treeId, treeNode) {
        this.$emit('onCheck', treeId, treeNode)
      },
      // 拖放前调用
      beforeDragTree (treeId, treeNode) {
        this.$emit('beforeDrag', treeId, treeNode)
      },
      // 拖放结束调用
      beforeDropTree (treeId, treeNode, targetNode, moveType) {
        this.$emit('beforeDrop', treeId, treeNode, targetNode, moveType)
      },
      // 拖放开始
      onDragTree (event, treeId, treeNode) {
        this.$emit('onDrag', treeId, treeNode)
      },
      //拖放移动
      onDragMoveTree (event, treeId, treeNode) {
        this.$emit('onDragMove', treeId, treeNode)
      },
      // 拖放结束
      onDropTree (event, treeId, treeNodes, targetNode, moveType) {
        this.$emit('beforeDrop', treeId, treeNodes, targetNode, moveType)
      },
      // 节点展开
      onExpandTree (event, treeId, treeNode) {
        this.$emit('onExpand', treeId, treeNode)
      },
      // 删除节点
      onRemoveTree (event, treeId, treeNode) {
        this.$emit('onRemove', treeId, treeNode)
      },
      // 重命名 isCancel是否取消
      onRenameTree (event, treeId, treeNode, isCancel) {
        if (!isCancel) {
          this.$emit('onRename', treeId, treeNode)
        } else {
          this.$emit('onRename', treeId, treeNode,isCancel)
        }
      },
      // 鼠标右击
      onRightClickTree (event, treeId, treeNode) {
        this.$emit('onRightClick', treeId, treeNode)
      }
    },
    mounted() {
      $.fn.zTree.init(this.$jquery('#tree'), this.setting, this.treeData)
    }
  }
</script>
<!--
说明
1. 	修改节点字体格式
		1.1--{ name:"蓝色字", font:{'color':'blue'}},
		1.2--{ name:"<span style='color:blue;margin-right:0px;'>view</span>.<span style='color:red;margin-right:0px;'>nameIsHTML</span>"},

2. 自定义icon
    1.1--开关icon变化{ id:1, pId:0, name:"展开、折叠 自定义图标不同", open:true, iconOpen:"../../../css/zTreeStyle/img/diy/1_open.png", iconClose:"../../../css/zTreeStyle/img/diy/1_close.png"},
		1.2--普通icon{ id:11, pId:1, name:"叶子节点1", icon:"../../../css/zTreeStyle/img/diy/2.png"},

3. url跳转 target--是否打开一个新页面
	{ id:2, pId:0, name:"zTree in Google", url:"http://code.google.com/p/jquerytree/", target:"_blank"},

4. 复选框禁用 chkDisabled--禁用 checked--默认勾选
			{ id:12, pId:1, name:"disabled 1-2", chkDisabled:true, checked:true, open:true},

5. 文档  http://www.treejs.cn/v3/api.php

配置
 在../src/static/ztree有插件
 npm i jquery
 在main.js
import '../src/static/ztree/jquery.ztree.core.min'
import '../src/static/ztree/jquery.ztree.core.min'
import '../src/static/ztree/jquery.ztree.excheck.min'
import '../src/static/ztree/jquery.ztree.exedit.min'
import '../src/static/ztree/zTreeStyle/zTreeStyle.css'

6. chkboxType
Y 属性定义 checkbox 被勾选后的情况；
N 属性定义 checkbox 取消勾选后的情况；
"p" 表示操作会影响父级节点；
"s" 表示操作会影响子级节点。
-->
