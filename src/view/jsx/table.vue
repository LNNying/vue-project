<template>
  <div>
    <Button size="small" type="primary" @click="addItem">增加</Button>
    <el-table
      :data="tableData"
      height="calc(100vh - 300px)"
      empty-text="暂无数据"
      style="width: 100%">
      <el-table-column
       type="index"
       label="序号"
       width="50">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
        <template slot-scope="scope">
          <DatePicker v-model="scope.row.date" size="small"></DatePicker>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <Input v-model="scope.row.name" size="small"></Input>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address" size="small" v-show="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address1"
        label="地址1"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address1" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address2"
        label="地址2"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address2" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address3"
        label="地址3"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address3" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address4"
        label="地址4"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address4" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address5"
        label="地址5"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address5" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address6"
        label="地址6"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address6" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address7"
        label="地址7"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address7" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address8"
        label="地址8"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address8" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address9"
        label="地址9"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address9" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address10"
        label="地址10"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address10" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address11"
        label="地址11"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address11" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="address12"
        label="地址12"
        width="120">
        <template slot-scope="scope">
          <SelectCom v-model="scope.row.address12" size="small" v-if="disable">
            <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
          </SelectCom>
        </template>
      </el-table-column>
      <el-table-column
        prop="oper"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <Button size="small" type="primary" @click="deleteItem(scope.row)">删除</Button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import SelectCom from './com'
  export default {
    name: "table",
    components: {SelectCom},
    data() {
      return {
        tableData: [],
        disable: true,
        addList: [
          {
            dictName: 1,
            dictValue: 1
          },
          {
            dictName: 1,
            dictValue: 1
          },
          {
            dictName: 1,
            dictValue: 1
          },
          {
            dictName: 1,
            dictValue: 1
          },
          {
            dictName: 1,
            dictValue: 1
          },
          {
            dictName: 1,
            dictValue: 1
          }
        ]
      }
    },
    methods: {
      addItem() {
        this.disable = true;
        this.tableData.push({
          id: this.tableData.length,
          date: new Date(),
          name: '',
          address: '',
          address1: '',
          address2: '',
          address3: '',
          address4: '',
          address5: '',
          address6: '',
          address7: '',
          address8: '',
          address9: '',
          address10: '',
          address11: '',
          address12: ''
        })
      },
      deleteItem(row) {
        console.log(row);
        for (let i = 0; i < this.tableData.length; i++) {
          if (row.id === this.tableData[i].id) {
            this.tableData.splice(i, 1);
            return;
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
