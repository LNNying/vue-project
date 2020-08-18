<template>
  <div>
    <select-new-complete
      ref="el_001"
      @on-enter="onFocus('el_002')"
      v-model="custNo"
      :page-opt="customertableOpt"
      :clearable="true"
      :loading-data="loadingData"
      :first-load-data.sync="firstLoadData"
      :total="total"
      :data="list"
      data-field="a"
      value-field="customerId"
      size="small"
      icon="ios-search"
      label-field="customerName"
      descField="mnemonicCode"
      placeholder="测试"
      style="width:100%"
      @on-change="onChangeCustomerInfo"
      @on-select="onSelectBookInfo"
    >
    </select-new-complete>
  </div>
</template>

<script>
  import SelectNewComplete from "./component/my-select";

  export default {
    name: "select-my",
    components: {SelectNewComplete},
    data () {
      return {
        custNo: '',
        loadingData: false,
        total: 0,
        list: [],
        firstLoadData: null,
        customertableOpt: {
          pageNum: 1,
          pageSize: 10,
          sortList: [],
          customerProperty: '',
          searchKey: '',
          filterList: []
        },
      }
    },
    methods: {
      onChangeCustomerInfo () {

      },
      onSelectBookInfo () {

      },
      onFocus () {

      }
    }
  }
</script>

<style scoped>

</style>
