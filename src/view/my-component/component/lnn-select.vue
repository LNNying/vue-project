<!--
size 选值为large、small、default或者不设置
showDelIcon 是否显示清除按钮
disable 禁用
showTable 是否显示表格
loading: 加载
filterData: 搜索
width：宽度
data： 数据
multiple：是否多选
fieldKey： key值
fieldName： 名称
listQuery：分页查询条件
placeholder: 提示信息
on-change 主要获取数据
on-select 主要获取选取数据
多选雨搜索不能同时存在
-->

<template>
  <div class="lnn-select" :style="{width: `${width}px`}" v-click-outside="onBlur">
    <Input v-model="selectValue" style="cursor: default" :size="size" :disabled="disable" :readonly="!filterData && !multiple"
           @click.native.stop="showBox"
           @mouseover.native="mouseoverHandler" @mouseout.native="mouseoutHandler" @on-change="onChange" :placeholder="placeholder">
      <template>
        <Icon v-if="!showDelIcon" :type="show? 'ios-arrow-up' : 'ios-arrow-down'" slot="suffix"/>
        <Icon v-if="showDelIcon" type="ios-close-circle" slot="suffix" @click.native="del" title=""/>
      </template>
    </Input>
    <!--"-->
    <transition name="slide-fade">
      <div v-if="show && !disable">
        <div class="lnn-select-body" :style="{backgroundColor: backColor,zIndex: transfer}" v-loading="loading">
          <div>
            <div v-if="data.length > 0">
              <div class="lnn-select-list" v-for="(item, ind) in data" :key="ind" :ref="item[fieldName]"
                   @click="clickItem(item)">
                <span>{{item[fieldName]}}</span>
                <Icon v-show="item['showIcon']" type="ios-checkmark" size="23"
                      style="color: #2f70ff;position: absolute;right: 10px;"/>
              </div>
            </div>
            <div v-else-if="data.length <= 0" class="lnn-empty"><span>暂无数据</span></div>
            <div class="lnn-select-footer">
              <div>
                <Button :size="size" :disabled="listQuery.pageNum === 1" @click="changePages('1')">&lt;</Button>
                <Button style="margin-left: 2px" :size="size" :disabled="listQuery.pageNum === 1" @click="changePages('2')">&lt;&lt;</Button>
              </div>
              <div style="padding-top: 3px;"><span>{{listQuery.pageNum}}</span><span>/</span><span>{{pageCount}}</span>
              </div>
              <div>
                <Button :size="size" :disabled="listQuery.pageNum === listQuery.total" @click="changePages('3')">&gt;&gt;</Button>
                <Button style="margin-left: 2px;" :size="size" :disabled="listQuery.pageNum === listQuery.total" @click="changePages('4')">&gt;</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: "lnn-select",
    props: {
      size: {
        String,
        default: 'large'
      },
      width: {
        Number,
        default: 300
      },
      backColor: {
        String,
        default: '#fff'
      },
      loading: {
        Boolean,
        default: false
      },
      transfer: {
        Number,
        default: 50
      },
      disable: {
        Boolean,
        default: false
      },
      value: {
        String,
        default: ''
      },
      placeholder: {
        String,
        default: '请选择'
      },
      filterData: { // 默认不允许查询
        Boolean,
        default: false
      },
      data: {
        Array,
        default: () => []
      },
      multiple: {
        Boolean,
        default: false
      },
      fieldKey: { // key
        String,
        default: ''
      },
      fieldName: { // 名称
        String,
        default: '',
      }
    },
    data() {
      return {
        listQuery: {
          pageNum: 1,
          pageSize: 10,
          searchName: '', // 查询中文名称
          filterList: [],
          sortList: [],
          pageOptionsList: [10,20,30,40,50]
        },
        showDelIcon: false,
        showTable: true,
        show: false, // 得失焦点显示icon
        selectValue: '', // 名称
        selectCode: '', // key值
        showPage: false,
        copyData: [],
        singleSelect: {}, // 单选
        multipleSelect: [], // 多选
        pageCount: 0
      }
    },
    computed: {},
    methods: {
      // 查询
      onChange(val) {
        if(this.filterData) {
          this.clearStyle()
          this.listQuery.searchKey = this.selectValue
          this.$emit('on-change', this.listQuery)
        }
      },
      // 清空背景和对勾显示
      clearStyle() {
        this.data.forEach(item => {
          item.showIcon = false
          this.$nextTick(() => {
            this.$refs[item[this.fieldName]][0].style.backgroundColor = ''
          })
        })
      },
      changePages(val) {
        if (this.filterData) {
          this.listQuery.searchKey = this.selectValue
        }
        switch (val) {
          case '1': // 上一页
            this.listQuery.pageNum -= 1
                break;
          case '2': // 第一页
            this.listQuery.pageNum = 1
                break;
          case '3': // 下一页
            this.listQuery.pageNum += 1
                break;
          case '4': // 最后一页
            this.listQuery.pageNum = this.listQuery.total
                break;
          default:
            console.log('错误页数操作');
            break;
        }
        this.$emit('on-change', this.listQuery)
      },
      mouseoverHandler() {
        if (this.selectValue.length) {
          this.showDelIcon = true;
        }
      },
      mouseoutHandler() {
        this.showDelIcon = false;
      },
      showBox() {
        if (!this.disable) {
          this.show = true;
          this.showTable = true
          this.$emit('click', this.show);
          if (this.filterData) {
            this.listQuery.searchName = this.selectValue
          }
          this.$emit('on-change', this.listQuery)
        }
      },
      del() {
        this.clearStyle()
        this.selectValue = ''
        this.showTable = false
        this.singleSelect = {}
        this.multipleSelect = []
        this.listQuery.searchKey = ''
        this.$emit('on-change', this.listQuery)
        this.$emit('input', '')
      },
      clickItem(item) {
        let stringOrArrat = null
        if (this.multiple) { // 多选
          this.multipleSelect.push(item[this.fieldName])
          this.selectValue = this.multipleSelect.join(',')
        } else { // 点选
          this.selectValue = item[this.fieldName]
          this.singleSelect = item
          this.selectCode = item[this.fieldKey]
          stringOrArrat = this.selectCode
          this.$emit('input', stringOrArrat)
          this.$emit('on-select', item)
        }
        this.show = false
      },
      onBlur() {
        let keyList = JSON.stringify(this.singleSelect)
        if (keyList === '{}') {
          this.selectValue = ''
          this.selectCode = ''
        }
        this.show = false
      }
    },
    mounted() {
    },
    watch: {
      total(val) {
        this.pageCount = Math.ceil(val / this.listQuery.pageSize);
      },
      show(newVal) {
        this.$nextTick(() => {
          if (newVal && this.data.length > 0 && this.selectValue !== '') {
            let dataList = _.cloneDeep(this.data)
            let clickItem = dataList.filter(item => {
              return item[this.fieldName] === this.selectValue
            })
            if (!this.multiple) {
              // this.data.forEach(item => {
              //   item.showIcon = false
              // })
              for (let i = 0; i < this.data.length; i++) {
                if (this.data[i][this.fieldName] === this.selectValue) {
                  this.data[i].showIcon = true
                } else {
                  this.data[i].showIcon = false
                }
              }
              this.$refs[clickItem[0][this.fieldName]][0].style.backgroundColor = '#eee'
            } else {
              for (let j = 0; j < this.data.length; j++) {
                if (this.multipleSelect.indexOf(this.data[j][this.fieldName]) !== -1) {
                  this.data[j].showIcon = true
                }
              }
            }
          }
        })
      },
      // data: {
      //   handle: function(newVal, oldVal) {
      //     if (newVal.length > 0 && newVal !== oldVal) {
      //       this.data.forEach(item => {
      //         item.showIcon = false
      //       })
      //     }
      //   },
      //   deep: true
      // }
    }
  }
</script>

<style lang="less" scoped>
  .lnn-select {
    position: relative;
    cursor: default;
    .lnn-select-body {
      margin-top: 2px;
      border-radius: 5px 5px;
      box-shadow: darkgrey 0 0 5px 0;
      position: absolute;
      width: 100%;
      max-height: 300px;
      .lnn-empty {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .lnn-select-list {
        padding: 3px 10px;
        &:hover {
          background: #d2d2d5;
        }
      }
      .lnn-select-footer {
        display: flex;
        padding: 2px 2px;
        justify-content: space-between;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(5px);
    opacity: 0;
  }

</style>
