<template>
  <div class="lnn-select" :style="{width: `${width}px`}">
    <div class="lnn-select-input">
      <input @click="clickInput" :value="value" :placeholder="placeholder" v-click-outside="clickOutside" readonly></input>
    </div>
    <transition name="transition-drop">
      <div class="lnn-select-option" v-if="showOption">
        <ul class="lnn-select-ul" v-if="dataList.length > 0">
          <li v-for="(item, index) in dataList" :key="index" @click="clickLi(item[valueName], index)">{{item[label]}}</li>
        </ul>
        <ul v-else>
          <li @click="clickLi('')" style="text-align: center; padding: 5px 0;color: #cecece;"> 暂无数据</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "custom-select-my",
    props: {
      value: {
        String
      },
      width: {
        Number,
        default: () => {
          return 200
        }
      },
      placeholder: {
        String,
        default: () => {
          return '请选择'
        }
      },
      dataList: {
        Array
      },
      label: {
        String
      },
      valueName: {
        String
      }
    },
    data() {
      return {
        showOption: false
      }
    },
    methods: {
      clickInput() {
        this.showOption = true;
      },
      clickLi(value, index) {
        this.showOption = false;
        if (!!value) {
          this.$emit('on-change', {value, index});
          this.$emit('input', value);
        }
      },
      clickOutside() {
        this.showOption = false;
      }
    }
  }
</script>

<style scoped>
  .lnn-select {
    height: 35px;
    position: absolute;
  }
  .lnn-select-input {
    width: 100%;
    height: 100%;
  }
  .lnn-select-input input {
    width: 100%;
    height: 100%;
    border: 1px solid #bab6b9;
    border-radius: 2px 2px;
    box-shadow: 0 0 2px 2px #eeeeee;
    position: absolute;
    /*padding: 5px 3px;*/
    cursor: pointer;
  }
  .lnn-select-input input:focus {
    border: 1px solid #ade9ff;
    outline: 1px solid #ade9ff;
  }
  .lnn-select-option {
    z-index: 100000;
  }
  .lnn-select-option ul {
    margin-top: 3px;
    background: white;
    box-shadow: 0 0 2px 3px #eeeeee;
    border-radius: 2px 2px;
  }
  .lnn-select-option ul li {
    position: relative;
    list-style: none;
    padding-left: 3px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .lnn-select-option ul.lnn-select-ul li:hover {
    background: #bfeeff;
  }


</style>
