<style scoped lang="less">
  .page-num {
    line-height: 24px;
    text-align: center;
  }
  .page-box {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .null-option {
    padding: 10px 0;
    box-sizing: border-box;
    text-align: center;
  }
  .operation-btn {
    width: 24px;
    text-align: center;
    padding: 0;
  }
  .label-box {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .desc-box{
    color: #999999;
  }
  .options-item-label{
    flex: none;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding-right: 3px;
    box-sizing: border-box;
  }
  .options-item-desc{
    flex: none;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #999999;
    box-sizing: border-box;
    padding: 0 3px;
    &:first-child{
      padding: 0 0 0 3px;
    }
    &:last-child{
      padding: 0 0 0 3px;
    }
  }
</style>
<template>
  <Select
    ref="select"
    class="ivu-auto-complete"
    :label="label"
    :disabled="disabled"
    :clearable="clearable && !disabled"
    :placeholder="placeholder"
    :size="size"
    :placement="placement"
    v-clickoutside="handleBlur"
    filterable
    remote
    auto-complete
    :remote-method="remoteMethod"
    @on-change="handleChange"
    :transfer="transfer"
    @keydown.tab.native="handleBlur"
    @on-enter="onEnter"
    :options-width="type == 'port' ? '600': '600'"
  >
    <slot name="input">
      <i-input :style="{width:inputWidth}"
               :element-id="elementId"
               ref="input"
               slot="input"
               v-model="currentValue"
               :name="name"
               :placeholder="placeholder"
               :disabled="disabled"
               :size="size"
               :icon="inputIcon"
               @on-click="handleClear"
               @on-focus="handleFocus"
      ></i-input>
    </slot>
    <slot>
      <div v-if="!disabled" v-loading="loadingData" class="no-select of-hidden" style="background-color: #C2FFC8">
        <i-option v-for="item in data" :value="item[valueField]" :title="item[labelField]" :key="item.id">
          <div class="flex" v-if="type == null">
            <div class="options-item-label" style="width: 350px;">{{item[labelField]}}</div>
            <div class="options-itm-desc"  style="width: 200px;" v-if="descField">{{item[descField]}}</div>
          </div>
          <div class="flex" v-else>
            <div class="options-item-label" :title="item['code']" style="width: 60px;">{{item['code']}}</div>
            <div class="options-itm-desc" :title="item['englishName']" style="width: 150px;">{{item[labelField]!=''?item[labelField]:'无'}}</div>
            <div class="options-item-desc" :title="item['stateName']" style="width: 120px;">{{item[descField]!=''?item[descField]:'无'}}</div>
            <div class="options-item-desc" :title="item['countryName']" style="width: 120px;">{{item['countryName']!=''?item['countryName']:'无'}}</div>
            <div class="options-item-desc" :title="item['remark']" style="width: 60px;">{{item['remark']!=''?item['remark']:'无'}}</div>
            <div class="options-item-desc" :title="item['itemOne']" style="width: 50px;">{{item['itemTwo']!=null?item['itemTwo']:''}}</div>
          </div>
        </i-option>
        <div class="null-option" v-if="total === 0">暂无记录</div>
        <div class="flex page-box" v-if="total > pageObj.pageSize" @click.stop>
          <Button class="flex-none operation-btn" type="ghost" size="small" :disabled="pageObj.pageNum === 1" @click.native="onPageDbLast()"><i class="iconfont icon-d-arrow-left"/></Button>
          <Button class="flex-none operation-btn" type="ghost" size="small" :disabled="pageObj.pageNum === 1"  @click.native="onPageLast()"><i class="iconfont icon-previewleft"/></Button>
          <div class="flex-auto page-num"><span>{{pageObj.pageNum}}</span><span>/</span><span>{{pageCount}}</span></div>
          <Button class="flex-none operation-btn" type="ghost" size="small" :disabled="pageObj.pageNum == pageCount" @click.native="onPageNext()"><i class="iconfont icon-previewright"/></Button>
          <Button class="flex-none operation-btn" type="ghost" size="small" :disabled="pageObj.pageNum == pageCount" @click.native="onPageDbNext()"><i class="iconfont icon-d-arrow-right"/></Button>
        </div>
      </div>
    </slot>
  </Select>
</template>
<script>
  import _ from 'lodash'
  export default {
    name: 'my-select',
    props: {
      value: {
        type: [String, Number],
        default: null
      },
      inputWidth: {
        type: String,
        default: '100%'
      },
      label: {
        type: [String, Number],
        default: ''
      },
      data: {
        type: Array,
        default: () => []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      },
      size: {
        type: String
      },
      icon: {
        type: String
      },
      filterMethod: {
        type: [Function, Boolean],
        default: false
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      transfer: {
        type: Boolean,
        default: true
      },
      name: {
        type: String
      },
      elementId: {
        type: String
      },
      pageOpt: {
        type: Object,
        default: () => {
          return {
            pageNum: 1,
            pageSize: 20,
            filterList: [],
            sortList: [],
            searchKey: ''
          };
        }
      },
      total: {
        type: Number,
        default: 0
      },
      loadingData: {
        type: Boolean,
        default: false
      },
      labelField: {
        type: String,
        default: null
      },
      valueField: {
        type: String,
        default: 'id'
      },
      descField: {
        type: String,
        default: null
      },
      dataField: {
        type: String,
        default: null
      },
      firstLoadData: {
        type: Boolean,
        default: null
      },
      type: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        currentValue: '',
        disableEmitChange: false, // for Form reset
        pageCount: 0,
        oldValue: null,
        dataObj: {},
        pageObj: _.cloneDeep(this.pageOpt),
        selected: null,
        firstLoaded: false,
        clearFlag: false,
        blurFlag: false,
        netFlag: this.firstLoadData
      };
    },
    computed: {
      inputIcon() {
        let icon = '';
        if (this.clearable && this.currentValue) {
          icon = 'ios-close';
        } else if (this.icon) {
          icon = this.icon;
        }
        return icon;
      },
      filteredData() {
        if (this.filterMethod) {
          return this.data.filter(item => this.filterMethod(this.currentValue, item));
        } else {
          return this.data;
        }
      }
    },
    mounted() {
      if (this.data !== null && this.data.length > 0) {
        // console.log('111111');
        // console.log(this.data);
        // setTimeout(()=>{
        this.dataListToObj(this.data);
        this.pageCount = Math.ceil(this.total / this.pageObj.pageSize);
        if (this.value !== null && this.value !== '' && (this.data.length > 0)) {
          if (this.dataObj[this.value] !== undefined && this.currentValue !== this.dataObj[this.value][this.labelField]) {
            this.selected = this.dataObj[this.value];
            this.$refs.select.model = this.value;
          }
        }
        // },10);
      }
    },
    created() {
      // console.log('22222');
      // this.dataListToObj();
      // if (this.value !== '' && this.value !== null) {
      //     this.$emit('on-change', this.pageObj, this.dataField);
      // }
    },
    watch: {
      value(val) {
        if (val === null || val === '') {
          this.currentValue = '';
          this.$refs.select.model = '';
          this.selected = null;
          this.pageObj.pageNum = 1;
          this.clearFlag = false;
        } else if ((val !== null && val !== '' && this.selected === null) || (this.selected[this.valueField] !== undefined && val !== this.selected[this.valueField])) { // 1.绑定值不为空,但数据为空(初始化后过程)    2.外部数据变化
          let pageObj = _.cloneDeep(this.pageOpt);
          pageObj.pageNum = 1;
          pageObj[this.valueField] = val;
          if (this.netFlag !== null && !this.netFlag) {
            this.$emit('on-change', pageObj, this.dataField);
          }
        }
      },
      currentValue(val) {
        this.oldValue = val;
        let _this = this;
        setTimeout(() => {
          if (_this.oldValue === val) {
            this.pageObj = _.cloneDeep(this.pageOpt);
            this.pageNum = 1;
            this.pageObj['searchKey'] = this.currentValue;

            if (this.netFlag !== null && !this.netFlag) {
              _this.$emit('on-change', this.pageObj, this.dataField);
            }
          }
        }, 400);
      },
      total(val) {
        this.pageCount = Math.ceil(val / this.pageObj.pageSize);
      },
      firstLoadData: {
        handler(val) {
          this.netFlag = val;
        },
        deep: true
      },
      data: {
        handler(val) {
          this.dataListToObj(val);
          if (this.value !== null && this.value !== '' && (this.data.length > 0)) {
            if (this.dataObj[this.value] !== undefined && this.currentValue !== this.dataObj[this.value][this.labelField]) {
              this.selected = this.dataObj[this.value];
              this.$refs.select.model = this.value;
            }
          }
          this.firstLoaded = true;
          this.$nextTick(() => {
            // this.$refs.select.updateDrop();
          });
        },
        deep: true
      }
    },
    methods: {
      onSelected() {
        this.$refs.select.visible = false;
        this.$refs.input.blur();
      },
      dataListToObj(list) {
        for (let index in list) {
          let item = list[index];
          this.dataObj[item[this.valueField]] = item;
        }
      },
      remoteMethod(query) {
        this.$emit('on-search', query);
      },
      handleChange(val) {
        if (val !== null && val !== '') {
          this.currentValue = this.dataObj[val][this.labelField];
          this.selected = this.dataObj[val];
        }
        this.$refs.select.model = val;
        this.$refs.input.blur();
        this.$emit('input', val);
        this.$emit('on-select', (val !== null && val !== '') ? this.dataObj[val] : '', this.dataField);
      },
      handleFocus() {
        this.netFlag = false;
        this.$emit('update:firstLoadData', false);
        if (this.firstLoaded === false && (this.value === null || this.value === '' || this.value === 0 || this.value === -1)) {
          this.pageObj = _.cloneDeep(this.pageOpt);
          this.pageNum = 1;
          this.pageObj['searchKey'] = this.currentValue;
          this.$emit('on-change', this.pageObj, this.dataField);
        }
        this.$refs.select.visible = true;
      },
      handleBlur() {
        if (this.selected !== null) {
          this.currentValue = this.selected[this.labelField];
        } else {
          this.currentValue = '';
        }
        this.$refs.input.blur();
      },
      handleClear() {
        if (!this.clearable) return;
        this.clearFlag = true;
        this.$emit('input', null);
        this.$emit('on-clear', this.dataField);
        this.onFocus();
      },
      onFocus() {
        this.$refs.input.focus();
        this.$nextTick(() => {
          this.handleFocus();
        });
      },
      onPageNext() {
        if (this.pageObj.pageNum < this.pageCount) {
          this.pageObj['searchKey'] = this.currentValue;
          this.pageObj.pageNum = this.pageObj.pageNum + 1;
          this.$emit('on-change', this.pageObj, this.dataField);
        }
      },
      onPageLast() {
        if (this.pageObj.pageNum > 0) {
          this.pageObj['searchKey'] = this.currentValue;
          this.pageObj['pageNum'] = this.pageObj.pageNum - 1;
          this.$emit('on-change', this.pageObj, this.dataField);
        }
      },
      onPageDbNext() {
        this.pageObj['pageNum'] = this.pageCount;
        this.pageObj['searchKey'] = this.currentValue;
        this.$emit('on-change', this.pageObj, this.dataField);
      },
      onPageDbLast() {
        this.pageObj['pageNum'] = 1;
        this.pageObj['searchKey'] = this.currentValue;
        this.$emit('on-change', this.pageObj, this.dataField);
      },
      onEnter() {
        this.handleBlur();
        this.$emit('on-enter', true);
      },
      focus() {
        this.$refs.input.focus();
        this.$nextTick(() => {
          this.handleFocus();
        });
      }
    }
  };
</script>
