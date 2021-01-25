<template>
  <div>
    <custom-select-my v-model="selectData" :data-list="dataList" value-name="value" label="name" style="margin-left: 100px"></custom-select-my>

    <el-table
      :data="tableData"
      height="calc(100vh - 195px)"
      border
      size="mini"
      style="margin-top: 200px;width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        width="120"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="operator"
        width="210"
        label="操作">
        <template slot-scope="scope">
          <custom-select-my style="z-index: 10000" v-model="selectData" :data-list="dataList" value-name="value" label="name"></custom-select-my>
        </template>
      </el-table-column>
      <el-table-column
        prop="operator"
        width="210"
        label="操作">
        <template slot-scope="scope">
          <Select v-model="selData">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
        </template>
      </el-table-column>
      <el-table-column
        prop="operator"
        width="210"
        label="操作">
        <template slot-scope="scope">
          <v-select :options="options" v-model="selectDatas" :reduce="name => name.code" label="name"></v-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import CustomSelectMy from "./select/custom-select-my";
  export default {
    name: "custom-select",
    components: {CustomSelectMy},
    data() {
      return {
        selData: '',
        options: [{
          name: 'company',
          code: 'cm'
        }],
        selectDatas: 'cm',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        selectData: '',
        dataList: [
          {
            value: 1,
            name: 1
          },
          {
            value: 2,
            name: 2
          },
          {
            value: 3,
            name: 3
          }
        ]
      }
    },
    methods: {

    },
    watch: {
      selectData(newVal) {
        console.log(newVal);
      },
      selectDatas(newVal) {
        console.log(newVal);
      }
    }
  }
</script>

<style scoped>
  .lnn-select {
    width: 200px;
    height: 25px;
    position: relative;
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
  }
  .lnn-select-input input:focus {
    border: none;
    outline: 1px solid #ade9ff;
  }

  .lnn-select-option ul {
    margin-top: 3px;
    background: white;
    box-shadow: 0 0 2px 3px #eeeeee;
    border-radius: 2px 2px;
  }
  .lnn-select-option ul li {
    list-style: none;
    padding-left: 3px;
    padding-top: 2px;
  }
  .lnn-select-option ul li:hover {
    background: #bfeeff;
  }


</style>
