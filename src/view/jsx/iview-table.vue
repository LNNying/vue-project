<template>
  <div>
    <Button size="small" type="primary" @click="addItem">增加</Button>
    <Table border :columns="columns"  width="100%" max-height="300px" :data="tableData">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{row}" slot="date">
        <DatePicker v-model="row.date" size="small"></DatePicker>
      </template>
      <template slot-scope="{row}" slot="address">
        <Select v-model="row.address" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address1">
        <Select v-model="row.address1" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address2">
        <Select v-model="row.address2" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address3">
        <Select v-model="row.address3" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address4">
        <Select v-model="row.address4" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address5">
        <Select v-model="row.address5" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address6">
        <Select v-model="row.address6" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address7">
        <Select v-model="row.address7" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address8">
        <Select v-model="row.address8" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address9">
        <Select v-model="row.address9" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address10">
        <Select v-model="row.address10" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address11">
        <Select v-model="row.address11" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{row}" slot="address12">
        <Select v-model="row.address12" size="small" v-if="disable">
          <Option v-for="(item, index) in addList" :key="index" :value="item.dictValue">{{item.dictName}}</Option>
        </Select>
      </template>
      <template slot-scope="{ row, index }" slot="oper">
        <Button type="error" size="small" @click="deleteItem(index)">Delete</Button>
      </template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: "iview-talbe",
    data() {
      return {
        disable: true,
        tableData: [],
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
        ],
        columns: [
          {
            title: 'Date',
            slot: 'date',
            width: '120'
          },
          {
            title: 'Name',
            slot: 'name',
            width: '120'
          },
          {
            title: 'Address',
            slot: 'address',
            width: '120'
          },
          {
            title: 'Address1',
            slot: 'address1',
            width: '120'
          },
          {
            title: 'Address2',
            slot: 'address2',
            width: '120'
          },
          {
            title: 'Address3',
            slot: 'address3',
            width: '120'
          },
          {
            title: 'Address4',
            slot: 'address4',
            width: '120'
          },
          {
            title: 'Address5',
            slot: 'address5',
            width: '120'
          },
          {
            title: 'Address6',
            slot: 'address6',
            width: '120'
          },
          {
            title: 'Address7',
            slot: 'address7',
            width: '120'
          },
          {
            title: 'Address8',
            slot: 'address8',
            width: '120'
          },
          {
            title: 'Address9',
            slot: 'address9',
            width: '120'
          },
          {
            title: 'Address10',
            slot: 'address10',
            width: '120'
          },
          {
            title: 'Address11',
            slot: 'address11',
            width: '120'
          },
          {
            title: 'Address12',
            slot: 'address12',
            width: '120'
          },
          {
            title: '操作',
            slot: 'oper',
            width: '120',
            fixed: true
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
      deleteItem(index) {
        this.tableData.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
